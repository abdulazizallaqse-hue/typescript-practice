
import { NotificationService } from "./NotificationService.js";

const notificationService = new NotificationService();

notificationService.onSent(event => {
    console.log(event);
});

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