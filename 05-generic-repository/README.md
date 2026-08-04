# Generic Repository

## Problem Description

This project implements a generic repository pattern using TypeScript.

The repository manages collections of objects that contain an `id` property and provides common CRUD operations in a type-safe manner. It also uses custom error classes to handle duplicate items and missing records while preventing modification of immutable properties.

The implementation follows TypeScript strict mode and makes use of generic constraints and utility types.

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
```

---

## Example Output

```text
{
  id: "USER-1",
  name: "Ahmed Abdalla",
  email: "ahmed@example.com"
}
```

---

## Technical Decisions

- Implemented a generic `Repository<T>` class with the constraint `T extends { id: string }`.
- Encapsulated repository data to prevent direct modification.
- Used `Partial<Omit<T, "id">>` to allow updating selected properties while protecting the `id`.
- Created custom error classes for duplicate IDs and missing items.
- Returned strongly typed results for all CRUD operations.
- Added explicit method return types for readability and maintainability.

---

## Edge Cases Handled

- Adding an item with an existing ID throws `DuplicateIdError`.
- Updating or deleting a non-existing item throws `ItemNotFoundError`.
- `findById()` returns `undefined` when the item does not exist.
- The `id` property cannot be updated at compile time.
- Repository returns a copy of stored data instead of exposing internal state directly.
- No use of `any` or unnecessary type assertions.

Example compile-time error:

```ts
userRepository.update("USER-1", {
  id: "USER-50"
});
```

---

## Topics Covered

- Generic Classes
- Generic Constraints
- Partial Utility Type
- Omit Utility Type
- Custom Errors
- Encapsulation
- CRUD Operations
- Type Safety
- Strict Mode