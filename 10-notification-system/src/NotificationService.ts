import type { NotificationSentEvent, NotificationType, NotificationPayloadMap } from "./types.js";
import { NotificationFactory } from "./NotificationFactory.js";
import { EventEmitter } from "./EventEmitter.js";

// Maps each type to a function that sends its matching payload
type NotificationHandlers = {
    [K in NotificationType]: (payload: NotificationPayloadMap[K]) => Promise<void>;
};
// One handler per notification type
const handlers: NotificationHandlers = {
    email: payload => NotificationFactory.createSender("email").send(payload),
    sms: payload => NotificationFactory.createSender("sms").send(payload),
    push: payload => NotificationFactory.createSender("push").send(payload),
};
// Maps each type to a function that builds its matching event
type EventFactories = {
    [K in NotificationType]: (payload: NotificationPayloadMap[K]) => NotificationSentEvent;
};
// One event builder per notification type

const makeEvent: EventFactories = {
    email: payload => ({ type: "email", sentAt: new Date(), payload }),
    sms: payload => ({ type: "sms", sentAt: new Date(), payload }),
    push: payload => ({ type: "push", sentAt: new Date(), payload }),
};

export class NotificationService {
    // Tracks listeners for sent notifications
    private eventEmitter = new EventEmitter<NotificationSentEvent>();
    // Sends a notification and notifies listeners
    async send<T extends NotificationType>(
        type: T,
        payload: NotificationPayloadMap[T]
    ): Promise<void> {
        // Send the notification by the correct type
        await handlers[type](payload)
        // Build and emit the event
        const event = makeEvent[type](payload)
        this.eventEmitter.emit(event)
    }

    // Registers a listener; returns a function to unsubscribe
    onSent(
        listener: (event: NotificationSentEvent) => void): () => void {
            return this.eventEmitter.subscribe(listener)
        }
}