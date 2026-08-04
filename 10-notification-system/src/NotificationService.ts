import type { NotificationSentEvent, NotificationType,NotificationPayloadMap } from "./types.js";
import {NotificationFactory} from "./NotificationFactory.js";
import {EventEmitter} from "./EventEmitter.js";
import {EmailNotificationSender, SmsNotificationSender,PushNotificationSender} from "./senders.js"


export class NotificationService {
    // Handles notification events
    private eventEmitter = new EventEmitter<NotificationSentEvent>();
    // Send a notification using the selected notification type.
    async send<T extends NotificationType>(
    type: T,
    payload: NotificationPayloadMap[T]
): Promise<void>{
    // Get the correct sender (Email, SMS, or Push).
    const sender = NotificationFactory.createSender(type)
    // Wait until the notification is sent
    await sender.send(payload)
    // Create an event with notification details.
    const event ={
        type,
        sentAt: new Date(),
        payload
    }
    // Notify all listeners that a notification was sent.
    this.eventEmitter.emit(event)
}
// Save a listener function.
// This function will run every time a notification is sent.
// Returns an unsubscribe function to stop listening later.
onSent(
    listener: (event: NotificationSentEvent) => void): () => void {
        return this.eventEmitter.subscribe(listener)
    }


}

