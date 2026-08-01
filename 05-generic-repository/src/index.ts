
class Repository<T extends { id: string }> {

    private _items: T[]= []

    // Add a new item
    // Throw an error if the ID already exists
    add(item: T): void{
        const existingItem = this._items.find(existing=> existing.id === item.id)
        if(existingItem){
            throw new DuplicateIdError()
        }
        this._items.push(item)
    }

    // Find one item by its ID
    findById(id: string): T | undefined {
    return this._items.find(item => item.id === id)
    }

    // Return all stored items
    getAll(): T[] {
        return this._items
    }

    // Update an existing item
    // Only non-ID properties can be changed
    update(id: string, changes: Partial<Omit<T, "id">>): T{
        
        const item = this.findById(id);
        if(!item){
            throw new ItemNotFoundError()
        }
        
        const updatedItem = { ...item, ...changes }
        this._items = this._items.map(existingItem =>
            existingItem.id === id ? updatedItem : existingItem
        );
        return updatedItem;
    }

    // Delete an item by its ID
    // Return true if deleted, otherwise false
    delete(id: string): boolean {
        const item = this.findById(id);
        if(!item){
            return false
        }
        this._items = this._items.filter(existingItem => existingItem.id !== id);
        return true;
    }

}

// Custom error for duplicate IDs
class DuplicateIdError extends Error {
    constructor() {
        super("Duplicate ID");
    }
}

// Custom error when an item cannot be found
class ItemNotFoundError extends Error {
    constructor() {
        super("Item not found");
    }
}




// Examples
type User = {
  id: string;
  name: string;
  email: string;
};

const userRepository = new Repository<User>();

userRepository.add({
  id: "USER-1",
  name: "Ahmed",
  email: "ahmed@example.com"
});

userRepository.add({
  id: "USER-2",
  name: "Sara",
  email: "sara@example.com"
});

console.log(userRepository.findById("USER-1"));

userRepository.update("USER-1", {
  name: "Ahmed Abdalla"
});

console.log(userRepository.getAll());

userRepository.delete("USER-2");


try {
    userRepository.add({
        id: "USER-1",
        name: "Another User",
        email: "another@example.com"
    });
} catch (error) {
    console.log(error);
}

try {
    userRepository.update("USER-99", {
        name: "Unknown"
    });
} catch (error) {
    console.log(error);
}
