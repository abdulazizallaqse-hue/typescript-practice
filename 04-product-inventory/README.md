# Product Inventory System

## Problem Description

This project implements a type-safe product inventory system using TypeScript.

The solution defines a shared base product interface and extends it to support both physical and digital products. It also provides helper functions to calculate the final product price and identify product types using custom type guards.

The implementation uses discriminated unions to safely handle different product behaviors while maintaining strict type safety.

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
const laptop: PhysicalProduct = {
  id: "P-1",
  name: "Laptop",
  price: 1200,
  type: "physical",
  weight: 2.5,
  stockQuantity: 10,
  shippingCost: 25
};

const course: DigitalProduct = {
  id: "P-2",
  name: "TypeScript Course",
  price: 150,
  type: "digital",
  downloadUrl: "https://example.com/course",
  fileSizeMB: 900,
  licenseKey: "TS-ABC-123"
};

console.log(calculateFinalPrice(laptop));
console.log(calculateFinalPrice(course));
```

---

## Example Output

```text
1225
135
```

---

## Technical Decisions

- Created a shared `BaseProduct` interface to avoid duplicated properties.
- Used interface inheritance for physical and digital products.
- Used a discriminated union (`type`) to distinguish product types safely.
- Implemented custom type guards with type predicates.
- Applied pricing rules based on the product type.
- Applied a 10% discount to digital products priced above $100.
- Added explicit function return types for clarity and maintainability.

---

## Edge Cases Handled

- Physical products include shipping cost in the final price.
- Digital products receive a 10% discount only when the price exceeds $100.
- Digital products priced at $100 or less are not discounted.
- Type guards safely identify product types at runtime.
- Invalid product types are rejected during TypeScript compilation.
- No use of `any` or unnecessary type assertions.

---

## Topics Covered

- Interfaces
- Interface Extension
- Discriminated Unions
- Type Guards
- Type Predicates
- Function Return Types
- Type Safety
- Strict Mode