

// Generic event emitter that allows subscribing to and emitting events.
export class EventEmitter <TEvent>{
    // Stores all registered event listeners.
    private listeners: ((event: TEvent) => void)[] = [];
    // Registers a new listener and returns a function to unsubscribe.
    subscribe(
        listener: (event :TEvent) => void
    ): () => void {
        // Add the listener to the list.
        this.listeners.push(listener)
        // Return a function that removes the listener.
        return () => {
            // Remove the listener from the list.
        this.listeners = this.listeners.filter(
        currentListener => currentListener !== listener
        )
    }
        
    }

    // Notifies all registered listeners with the event data.
    //send the event to all subscribed listener.
    emit(event:TEvent): void{
        // Execute every listener.
        this.listeners.forEach(listener => {
            listener(event)
        })
    }
    }

