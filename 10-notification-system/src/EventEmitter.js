// Generic event emitter that allows subscribing to and emitting events.
export class EventEmitter {
    // Stores all registered event listeners.
    listeners = [];
    // Registers a new listener and returns a function to unsubscribe.
    subscribe(listener) {
        // Add the listener to the list.
        this.listeners.push(listener);
        // Return a function that removes the listener.
        return () => {
            // Remove the listener from the list.
            this.listeners = this.listeners.filter(currentListener => currentListener !== listener);
        };
    }
    // Notifies all registered listeners with the event data.
    //send the event to all subscribed listener.
    emit(event) {
        // Execute every listener.
        this.listeners.forEach(listener => {
            listener(event);
        });
    }
}
//# sourceMappingURL=EventEmitter.js.map