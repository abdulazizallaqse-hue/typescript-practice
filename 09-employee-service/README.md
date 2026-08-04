# Async Employee Service

## Problem Description

This project implements an asynchronous employee management service using TypeScript.

The service simulates a backend API by performing asynchronous CRUD operations with `Promise` and `setTimeout`. It supports creating, retrieving, and updating employees while performing runtime validation and throwing custom errors when invalid operations occur.

The implementation follows TypeScript strict mode and uses utility types to create input models.

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
const service = new EmployeeService();

const employee = await service.createEmployee({
  name: "Ahmed Ali",
  email: "ahmed@example.com",
  department: "Engineering",
  salary: 5000,
  isActive: true
});

console.log(employee);

const updatedEmployee =
  await service.updateEmployee(employee.id, {
    salary: 6000,
    isActive: false
  });

console.log(updatedEmployee);
```

---

## Example Output

```text
{
  id: "generated-id",
  name: "Ahmed Ali",
  email: "ahmed@example.com",
  department: "Engineering",
  salary: 5000,
  isActive: true,
  createdAt: 2026-07-29T10:00:00.000Z
}

{
  id: "generated-id",
  name: "Ahmed Ali",
  email: "ahmed@example.com",
  department: "Engineering",
  salary: 6000,
  isActive: false,
  createdAt: 2026-07-29T10:00:00.000Z
}
```

---

## Technical Decisions

- Used `Promise` and `setTimeout` to simulate asynchronous API requests.
- Used `Omit` to create the employee creation model.
- Used `Partial<Omit<...>>` to support partial updates.
- Created custom error classes for common failure scenarios.
- Used `async/await` for clean asynchronous code.
- Used `unknown` inside `catch` blocks for safe error handling.
- Added runtime validation before creating or updating employees.
- Added explicit return types for readability and maintainability.

---

## Edge Cases Handled

- Duplicate email addresses throw `DuplicateEmailError`.
- Empty employee names throw `InvalidEmployeeInputError`.
- Negative salaries throw `InvalidEmployeeInputError`.
- Requesting a non-existing employee throws `EmployeeNotFoundError`.
- Partial updates modify only the provided fields.
- Simulated API latency using `setTimeout`.
- No use of `any` or unnecessary type assertions.

---

## Topics Covered

- Async/Await
- Promises
- Omit Utility Type
- Partial Utility Type
- Custom Errors
- Runtime Validation
- Error Handling
- Unknown Type
- Type Safety
- Strict Mode