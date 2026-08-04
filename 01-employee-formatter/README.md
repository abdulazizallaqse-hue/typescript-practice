# Employee Data Formatter

## Problem Description

This project implements a type-safe employee management utility using TypeScript.

The solution defines an `Employee` type with a restricted set of department values and provides helper functions to:

- Format employee information into a readable string.
- Filter active employees from a collection.
- Handle optional phone numbers safely.

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
const employees: Employee[] = [
  {
    id: "EMP-1",
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    age: 28,
    department: "Engineering",
    isActive: true,
    phoneNumber: "+966500000001"
  },
  {
    id: "EMP-2",
    name: "Sara Mohamed",
    email: "sara@example.com",
    age: 30,
    department: "HR",
    isActive: false
  }
];

console.log(formatEmployee(employees[0]));
console.log(getActiveEmployees(employees));
```

---

## Example Output

```text
Ahmed Ali - Engineering - ahmed@example.com - Active

[
  {
    id: "EMP-1",
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    age: 28,
    department: "Engineering",
    isActive: true,
    phoneNumber: "+966500000001"
  }
]
```

---

## Technical Decisions

- Used a literal union type for departments to prevent invalid values.
- Used an optional property for the employee phone number.
- Explicit function return types improve readability and maintainability.
- Used array filtering to retrieve active employees.
- Displayed readable status values ("Active" or "Inactive") instead of boolean values.
- Returned a formatted string for employee information.

---

## Edge Cases Handled

- Missing phone number displays **"No phone number"**.
- Empty employee arrays return an empty array.
- Invalid department values are rejected during TypeScript compilation.
- Strict typing prevents assigning incorrect property types.
- No use of `any` or unnecessary type assertions.

---

## Topics Covered

- Primitive Types
- Type Aliases
- Literal Union Types
- Arrays
- Optional Properties
- Function Return Types
- Type Safety
- Strict Mode