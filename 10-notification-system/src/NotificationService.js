// import type { NotificationSentEvent, NotificationType,NotificationPayloadMap } from "./types.js";
// import {NotificationFactory} from "./NotificationFactory.js";
// import {EventEmitter} from "./EventEmitter.js";
// import {EmailNotificationSender, SmsNotificationSender,PushNotificationSender} from "./senders.js"
import { NotificationFactory } from "./NotificationFactory.js";
import { EventEmitter } from "./EventEmitter.js";
const handlers = {
    email: payload => NotificationFactory.createSender("email").send(payload),
    sms: payload => NotificationFactory.createSender("sms").send(payload),
    push: payload => NotificationFactory.createSender("push").send(payload),
};
const makeEvent = {
    email: payload => ({ type: "email", sentAt: new Date(), payload }),
    sms: payload => ({ type: "sms", sentAt: new Date(), payload }),
    push: payload => ({ type: "push", sentAt: new Date(), payload }),
};
export class NotificationService {
    eventEmitter = new EventEmitter();
    async send(type, payload) {
        await handlers[type](payload);
        const event = makeEvent[type](payload);
        this.eventEmitter.emit(event);
    }
    onSent(listener) {
        return this.eventEmitter.subscribe(listener);
    }
}
//# sourceMappingURL=NotificationService.js.map