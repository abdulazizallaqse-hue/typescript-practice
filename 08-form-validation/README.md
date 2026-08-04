# Form Validation System

## Problem Description

This project implements a reusable and type-safe form validation system using TypeScript.

The solution provides a generic validation engine that supports different form types and reusable validators. It allows each field to have multiple validation rules while returning strongly typed validation errors.

The implementation follows TypeScript strict mode and avoids using `any`.

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
const loginData: LoginForm = {
  email: "invalid-email",
  password: "123"
};

const loginErrors = validateForm(loginData, {
  email: [
    required(),
    email()
  ],
  password: [
    required(),
    minLength(8)
  ]
});

console.log(loginErrors);
```

Another example:

```ts
const employeeData: EmployeeForm = {
  name: "",
  email: "employee@example.com",
  age: 15,
  salary: -100
};

const employeeErrors = validateForm(employeeData, {
  name: [required()],
  age: [min(18)],
  salary: [min(0)]
});

console.log(employeeErrors);
```

---

## Example Output

```text
{
  email: [
    "Invalid email address"
  ],
  password: [
    "Must contain at least 8 characters"
  ]
}

{
  name: [
    "This field is required"
  ],
  age: [
    "Minimum allowed value is 18"
  ],
  salary: [
    "Minimum allowed value is 0"
  ]
}
```

---

## Technical Decisions

- Implemented a generic `validateForm()` function that works with any form type.
- Used mapped types to generate validation errors for each form field.
- Created reusable validator functions such as `required`, `minLength`, `maxLength`, `email`, `min`, and `max`.
- Supported multiple validators per field.
- Used higher-order functions to create configurable validators.
- Returned only fields containing validation errors.
- Added explicit return types for better readability and maintainability.

---

## Edge Cases Handled

- Required fields cannot be empty.
- Invalid email addresses are detected.
- String length limits are validated.
- Numeric minimum and maximum values are enforced.
- Multiple validation errors can be returned for the same field.
- Empty validation results return an empty object.
- Strong typing prevents using number validators with string fields and vice versa.
- No use of `any` or unnecessary type assertions.

---

## Topics Covered

- Generics
- Mapped Types
- Higher-Order Functions
- Function Types
- Optional Properties
- Runtime Validation
- Type Safety
- Strict Mode