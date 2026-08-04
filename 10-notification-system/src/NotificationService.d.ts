import type { NotificationSentEvent, NotificationType, NotificationPayloadMap } from "./types.js";
export declare class NotificationService {
    private eventEmitter;
    send<T extends NotificationType>(type: T, payload: NotificationPayloadMap[T]): Promise<void>;
    onSent(listener: (event: NotificationSentEvent) => void): () => void;
}
//# sourceMappingURL=NotificationService.d.ts.map