
export type NotificationType =
  | "email"
  | "sms"
  | "push";

export type EmailPayload = {
  email: string;
  subject: string;
  message: string;
};

export type SmsPayload = {
  phoneNumber: string;
  message: string;
};

export type PushPayload = {
  deviceToken: string;
  title: string;
  message: string;
};

export type NotificationPayloadMap = {
  email: EmailPayload;
  sms: SmsPayload;
  push: PushPayload;
};


export type PayloadFor<
  T extends NotificationType
> = NotificationPayloadMap[T];


export type NotificationSentEvent = {
    type: NotificationType;
    sentAt: Date;
    payload: NotificationPayloadMap[NotificationType];
};
