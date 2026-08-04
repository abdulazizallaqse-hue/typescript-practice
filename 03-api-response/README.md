# Generic API Response Handler

## Problem Description

This project implements a generic API response handler using TypeScript.

The solution uses generics and discriminated unions to represent successful and failed API responses in a type-safe way. The response handler automatically narrows the response type and returns the data when the request succeeds or handles errors when it fails.

An optional loading state can also be added to represent requests that are still in progress.

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
type User = {
  id: string;
  name: string;
};

const successResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: "USER-1",
    name: "Ahmed"
  }
};

const failureResponse: ApiResponse<User> = {
  success: false,
  error: {
    code: 404,
    message: "User not found"
  }
};

handleApiResponse(successResponse);
handleApiResponse(failureResponse);
```

---

## Example Output

```text
Received data:
{
  id: "USER-1",
  name: "Ahmed"
}

Error 404: User not found
```

---

## Technical Decisions

- Used generic types to support any API response model.
- Used discriminated unions with the `success` property for type narrowing.
- Avoided type assertions by relying on TypeScript's control flow analysis.
- Returned the response data for successful requests.
- Returned `undefined` for failed requests.
- Added explicit return types for improved readability and maintainability.
- The implementation is compatible with an optional loading state for exhaustive handling.

---

## Edge Cases Handled

- Successful responses return the expected data.
- Failed responses display the error message and return `undefined`.
- Type narrowing is performed using `response.success`.
- No use of `any`.
- No unnecessary type assertions (`as`).
- Invalid response structures are rejected by TypeScript.

---

## Topics Covered

- Generics
- Discriminated Unions
- Type Narrowing
- Generic Functions
- Union Types
- Exhaustive Handling
- Function Return Types
- Strict Mode