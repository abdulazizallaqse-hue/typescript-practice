import { EmailNotificationSender } from "./senders.js";
import { SmsNotificationSender } from "./senders.js";
import { PushNotificationSender } from "./senders.js";
import type {NotificationType,
    EmailPayload,
    SmsPayload,
    PushPayload
} from "./types.js";

import type { NotificationSender } from "./senders.js";
// Maps each type to its sender
type NotificationSenderMap = {
    email: NotificationSender<EmailPayload>;
    sms: NotificationSender<SmsPayload>;
    push: NotificationSender<PushPayload>;
};

// One sender instance per type
const senders = {
    email: new EmailNotificationSender(),
    sms: new SmsNotificationSender(),
    push: new PushNotificationSender()
} satisfies NotificationSenderMap;

export class NotificationFactory {
  // Returns the sender matching the given type
  static createSender<T extends NotificationType>(
      type: T
  ): NotificationSenderMap[T] {
      return senders[type];
}
}

