# Type-Safe Notification System

## Problem Description

This project implements a type-safe notification system using TypeScript.

The solution supports multiple notification types, each with its own payload structure. A generic notification service ensures that the correct payload is provided for each notification type at compile time. The project also includes a notification factory, sender classes, and a reusable event emitter for tracking sent notifications.

The implementation follows TypeScript strict mode and avoids using `any`.

---

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Compile the project:

```bash
npx tsc
```

3. Run the compiled JavaScript:

```bash
node dist/index.js
```

> Adjust the output path if your project uses a different `outDir`.

---

## Example Input

```ts
const notificationService = new NotificationService();

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
  title: "New Message",
  message: "You have received a new message"
});

notificationService.onSent(event => {
  console.log(
    `${event.type} notification sent at ${event.sentAt}`
  );
});
```

---

## Example Output

```text
Email notification sent successfully.

SMS notification sent successfully.

Push notification sent successfully.

email notification sent at Tue Jul 29 2026 10:00:00 GMT+0300
sms notification sent at Tue Jul 29 2026 10:00:01 GMT+0300
push notification sent at Tue Jul 29 2026 10:00:02 GMT+0300
```

---

## Technical Decisions

- Used a mapped type to associate each notification type with its corresponding payload.
- Implemented a generic `send()` method to enforce payload type safety.
- Created separate sender classes for Email, SMS, and Push notifications.
- Used the Factory Pattern to create the appropriate notification sender.
- Implemented a reusable generic `EventEmitter` to notify listeners when a notification is sent.
- Used exhaustive type checking to ensure every notification type is handled.
- Added explicit return types for better readability and maintainability.

---

## Edge Cases Handled

- Invalid payloads are rejected during TypeScript compilation.
- Incorrect notification types cannot be used.
- Event listeners can be subscribed and unsubscribed safely.
- Factory implementation requires handling every notification type.
- The notification payload always matches the selected notification type.
- No use of `any` or unnecessary type assertions.

Examples that fail during compilation:

```ts
notificationService.send("email", {
  phoneNumber: "+966500000001",
  message: "Hello"
});

notificationService.send("sms", {
  email: "ahmed@example.com",
  subject: "Hello",
  message: "Hello"
});
```

---

## Topics Covered

- Advanced Generics
- Generic Interfaces
- Mapped Types
- Conditional Types
- Factory Pattern
- Event Emitter
- Modules
- Exhaustive Type Checking
- Type Safety
- Strict Mode