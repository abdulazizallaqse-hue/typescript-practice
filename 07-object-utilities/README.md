# Type-Safe Object Utilities

## Problem Description

This project implements a collection of reusable, type-safe object utility functions using TypeScript generics.

The solution provides generic functions to safely access, update, and select object properties while preserving full type inference. It uses `keyof`, indexed access types, and utility types to ensure only valid properties and values can be used.

The implementation follows TypeScript strict mode without using `any`.

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
const user = {
  id: "USER-1",
  name: "Ahmed",
  age: 30,
  isActive: true
};

const name = getProperty(user, "name");
const age = getProperty(user, "age");

const updatedUser = updateProperty(
  user,
  "age",
  31
);

const basicInfo = pickProperties(
  user,
  ["id", "name"]
);
```

---

## Example Output

```text
name: "Ahmed"

age: 30

updatedUser:
{
  id: "USER-1",
  name: "Ahmed",
  age: 31,
  isActive: true
}

basicInfo:
{
  id: "USER-1",
  name: "Ahmed"
}
```

---

## Technical Decisions

- Used generic functions to support any object type.
- Applied `keyof` to restrict property names to valid object keys.
- Used indexed access types (`T[K]`) to infer property value types.
- Used the `Pick` utility type to create objects containing only selected properties.
- Implemented `updateProperty()` to return a new object instead of modifying the original.
- Added explicit return types for better readability and maintainability.

---

## Edge Cases Handled

- Invalid property names are rejected during TypeScript compilation.
- Invalid property value types are rejected during TypeScript compilation.
- The original object is never mutated.
- Returned objects preserve their inferred types.
- No use of `any` or unnecessary type assertions.

Examples that fail during compilation:

```ts
getProperty(user, "email");

updateProperty(user, "age", "thirty");
```

---

## Topics Covered

- Generics
- Generic Constraints
- keyof
- Indexed Access Types
- Pick Utility Type
- Type Inference
- Immutable Updates
- Type Safety
- Strict Mode