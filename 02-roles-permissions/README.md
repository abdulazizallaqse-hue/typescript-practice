# Roles and Permissions

## Problem Description

This project implements a type-safe role and permission system using TypeScript.

The solution defines a set of predefined user roles and permissions using literal union types. A permission map is created with `Record` to associate each role with its allowed permissions, and a helper function is provided to verify whether a role has a specific permission.

The implementation ensures invalid roles or permissions are detected during TypeScript compilation.

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
console.log(hasPermission("admin", "users:delete"));

console.log(hasPermission("employee", "users:delete"));

console.log(hasPermission("manager", "reports:read"));
```

---

## Example Output

```text
true
false
true
```

---

## Technical Decisions

- Used literal union types to restrict valid roles and permissions.
- Used `Record<Role, readonly Permission[]>` to create a strongly typed permission map.
- Used `readonly` arrays to prevent accidental modification of permission lists.
- Used the `includes()` method to determine whether a role contains a specific permission.
- Added explicit return types for better readability and maintainability.
- Relied on TypeScript compile-time checking instead of runtime validation for invalid role and permission values.

---

## Edge Cases Handled

- Invalid role values are rejected during TypeScript compilation.
- Invalid permission values are rejected during TypeScript compilation.
- Roles with no permissions correctly return `false`.
- Permission lists cannot be modified because they are read-only.
- No use of `any` or unnecessary type assertions.

Examples that fail during compilation:

```ts
hasPermission("developer", "users:read");

hasPermission("admin", "database:delete");
```

---

## Topics Covered

- Literal Union Types
- Record Utility Type
- Readonly Arrays
- Compile-Time Validation
- Type Safety
- Function Return Types
- Strict Mode