import type { NotificationType } from "./types.js";
import type { EmailPayload, SmsPayload, PushPayload } from "./types.js";
import type { NotificationSender } from "./senders.js";
type NotificationSenderMap = {
    email: NotificationSender<EmailPayload>;
    sms: NotificationSender<SmsPayload>;
    push: NotificationSender<PushPayload>;
};
export declare class NotificationFactory {
    static createSender<T extends NotificationType>(type: T): NotificationSenderMap[T];
}
export {};
//# sourceMappingURL=NotificationFactory.d.ts.map