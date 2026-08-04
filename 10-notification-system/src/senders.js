export class EmailNotificationSender {
    send(payload) {
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
export class SmsNotificationSender {
    send(payload) {
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
export class PushNotificationSender {
    send(payload) {
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
//# sourceMappingURL=senders.js.map