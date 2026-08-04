import type {
  EmailPayload,
  SmsPayload,
  PushPayload
} from "./types.js";


export interface NotificationSender <T> {
    send(payload: T): Promise<void>;
}

export class EmailNotificationSender 
    implements NotificationSender<EmailPayload> {
        send(payload: EmailPayload): Promise<void> {
            // Simulate sending an email notification
            return new Promise((resolve) => {
                // Simulates an API delay before completing the request.
                setTimeout(() => {
                    console.log(`Sending email to ${payload.email} with subject "${payload.subject}" and message "${payload.message}"`);
                    resolve();
                }, 1000);
            });
        }
    }



export class SmsNotificationSender
    implements NotificationSender<SmsPayload> {
        send(payload: SmsPayload): Promise<void> {
            // Simulate sending an SMS notification
            return new Promise((resolve) => {
                // Simulates an API delay before completing the request.
                setTimeout(() => {
                    console.log(`Sending SMS to ${payload.phoneNumber} with message "${payload.message}"`);
                    resolve();
                }, 1000);
            });
        }
    }

export class PushNotificationSender
    implements NotificationSender<PushPayload> {
        send(payload: PushPayload): Promise<void> {
            // Simulate sending a push notification
            return new Promise((resolve) => {
                // Simulates an API delay before completing the request.
                setTimeout(() => {
                    console.log(`Sending push notification to device token ${payload.deviceToken} with title "${payload.title}" and message "${payload.message}"`);
                    resolve();
                }, 1000);
            });
        }
    }
