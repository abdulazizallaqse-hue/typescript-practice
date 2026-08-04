import type { EmailPayload, SmsPayload, PushPayload } from "./types.js";
export interface NotificationSender<T> {
    send(payload: T): Promise<void>;
}
export declare class EmailNotificationSender implements NotificationSender<EmailPayload> {
    send(payload: EmailPayload): Promise<void>;
}
export declare class SmsNotificationSender implements NotificationSender<SmsPayload> {
    send(payload: SmsPayload): Promise<void>;
}
export declare class PushNotificationSender implements NotificationSender<PushPayload> {
    send(payload: PushPayload): Promise<void>;
}
//# sourceMappingURL=senders.d.ts.map