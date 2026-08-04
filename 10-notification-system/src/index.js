// import { NotificationService } from "./NotificationService.js";
// const notificationService = new NotificationService();
// notificationService.onSent(event => {
//     console.log(event);
// });
// await notificationService.send("email", {
//     email: "ahmed@example.com",
//     subject: "Welcome",
//     message: "Welcome to our application"
// });
// await notificationService.send("sms", {
//     phoneNumber: "+966500000001",
//     message: "Your verification code is 1234"
// });
// await notificationService.send("push", {
//     deviceToken: "device-token-123",
//     title: "New message",
//     message: "You have received a new message"
// });
import { NotificationService } from "./NotificationService.js";
const notificationService = new NotificationService();
// -----------------------------------------------------------
// Example: send a notification of each type
// -----------------------------------------------------------
await notificationService.send("email", {
    email: "ahmed@example.com",
    subject: "Welcome",
    message: "Welcome to our application"
});
await notificationService.send("sms", {
    phoneNumber: "+966500000001",
    message: "Your verification code is 1234"
});
await notificationService.send("push", {
    deviceToken: "device-token-123",
    title: "New message",
    message: "You have received a new message"
});
// -----------------------------------------------------------
// These examples should fail during TypeScript compilation.
// Placed inside a function that is never called, so `tsc`
// checks them but `node` never runs them.
// -----------------------------------------------------------
function invalidExamples() {
    // @ts-expect-error - "email" needs email/subject, not phoneNumber
    notificationService.send("email", { phoneNumber: "+966500000001", message: "Hello" });
    // @ts-expect-error - "sms" needs phoneNumber, not email/subject
    notificationService.send("sms", { email: "ahmed@example.com", subject: "Hello", message: "Hello" });
}
// -----------------------------------------------------------
// Event Listener Example
// -----------------------------------------------------------
notificationService.onSent(event => {
    console.log(`${event.type} notification sent at ${event.sentAt}`);
});
//# sourceMappingURL=index.js.map