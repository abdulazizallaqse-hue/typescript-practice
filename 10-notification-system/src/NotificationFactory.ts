import type { NotificationType } from "./types.js";

import { EmailNotificationSender } from "./senders.js";
import { SmsNotificationSender } from "./senders.js";
import { PushNotificationSender } from "./senders.js";
import type {
    EmailPayload,
    SmsPayload,
    PushPayload
} from "./types.js";

import type { NotificationSender } from "./senders.js";

type NotificationSenderMap = {
    email: NotificationSender<EmailPayload>;
    sms: NotificationSender<SmsPayload>;
    push: NotificationSender<PushPayload>;
};

//new
const senders = {
    email: new EmailNotificationSender(),
    sms: new SmsNotificationSender(),
    push: new PushNotificationSender()
} satisfies NotificationSenderMap;

export class NotificationFactory {
  
     // Returns the sender that matches the selected notification type..
  // static createSender<T extends NotificationType>(type: T) : NotificationSenderMap[T] {
  //   switch (type) {
  //     case "email":
  //       return new EmailNotificationSender() as NotificationSenderMap[T]
  //     case "sms":
  //       return new SmsNotificationSender() as NotificationSenderMap[T]
  //     case "push":
  //       return new PushNotificationSender() as NotificationSenderMap[T]
  //       // Throws an error if the notification type is not supported.
  //     default:
  //       throw new Error(`Unsupported notification type: ${type}`);
  //   }
  // }


//new
  static createSender<T extends NotificationType>(
      type: T
  ): NotificationSenderMap[T] {
      return senders[type];
}
}

