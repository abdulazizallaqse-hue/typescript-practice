"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    _items = [];
    add(item) {
        const existingItem = this._items.find(existing => existing.id === item.id);
        if (existingItem) {
            throw new DuplicateIdError();
        }
        this._items.push(item);
    }
    findById(id) {
        return this._items.find(item => item.id === id);
    }
    getAll() {
        return this._items;
    }
    update(id, changes) {
        const item = this.findById(id);
        if (!item) {
            throw new ItemNotFoundError();
        }
        const updatedItem = { ...item, ...changes };
        this._items = this._items.map(existingItem => existingItem.id === id ? updatedItem : existingItem);
        return updatedItem;
    }
    delete(id) {
        const item = this.findById(id);
        if (!item) {
            return false;
        }
        this._items = this._items.filter(existingItem => existingItem.id !== id);
        return true;
    }
}
class DuplicateIdError extends Error {
    constructor() {
        super("Duplicate ID");
    }
}
class ItemNotFoundError extends Error {
    constructor() {
        super("Item not found");
    }
}
const userRepository = new Repository();
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
}
catch (error) {
    console.log(error);
}
try {
    userRepository.update("USER-99", {
        name: "Unknown"
    });
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=index.js.map