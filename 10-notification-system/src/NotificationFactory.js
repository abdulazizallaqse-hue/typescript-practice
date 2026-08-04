import { EmailNotificationSender } from "./senders.js";
import { SmsNotificationSender } from "./senders.js";
import { PushNotificationSender } from "./senders.js";
export class NotificationFactory {
    // Returns the sender that matches the selected notification type..
    static createSender(type) {
        switch (type) {
            case "email":
                return new EmailNotificationSender();
            case "sms":
                return new SmsNotificationSender();
            case "push":
                return new PushNotificationSender();
            // Throws an error if the notification type is not supported.
            default:
                throw new Error(`Unsupported notification type: ${type}`);
        }
    }
}
//# sourceMappingURL=NotificationFactory.js.map