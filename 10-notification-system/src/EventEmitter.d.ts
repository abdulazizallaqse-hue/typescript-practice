export declare class EventEmitter<TEvent> {
    private listeners;
    subscribe(listener: (event: TEvent) => void): () => void;
    emit(event: TEvent): void;
}
//# sourceMappingURL=EventEmitter.d.ts.map