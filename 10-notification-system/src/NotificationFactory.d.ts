import type { NotificationType } from "./types.js";
import { EmailNotificationSender } from "./senders.js";
import { SmsNotificationSender } from "./senders.js";
import { PushNotificationSender } from "./senders.js";
export declare class NotificationFactory {
    static createSender(type: NotificationType): EmailNotificationSender | SmsNotificationSender | PushNotificationSender;
}
//# sourceMappingURL=NotificationFactory.d.ts.map