# Bank Account System

## Problem Description

This project implements a simple bank account system using TypeScript object-oriented programming principles.

The solution defines an abstract `BankAccount` class and extends it with `SavingsAccount` and `BusinessAccount`. Each account type has its own withdrawal rules while sharing common functionality such as deposits, balance retrieval, and money transfers.

The implementation emphasizes encapsulation, inheritance, method overriding, and strict type safety.

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
const savings = new SavingsAccount(
  "ACC-1",
  "Ahmed",
  1000
);

savings.deposit(200);
savings.withdraw(100);

console.log(savings.getBalance());

const business = new BusinessAccount(
  "ACC-2",
  "Ahmed Company",
  500
);

business.withdraw(600);

console.log(business.getBalance());

savings.transfer(business, 100);
```

---

## Example Output

```text
1098

-106
```

---

## Technical Decisions

- Created an abstract `BankAccount` class to share common account functionality.
- Used inheritance to implement `SavingsAccount` and `BusinessAccount`.
- Overrode the `withdraw()` method to apply account-specific withdrawal rules.
- Implemented the `Transferable` interface for secure money transfers between accounts.
- Kept `accountId` private and `balance` protected to enforce encapsulation.
- Prevented direct modification of the account balance outside the class.
- Added explicit method return types for better readability and maintainability.

---

## Edge Cases Handled

- Rejects zero or negative deposit amounts.
- Rejects invalid withdrawal amounts.
- Savings accounts cannot withdraw more than the available balance.
- Savings account withdrawals include a fixed $2 transaction fee.
- Business accounts apply a 1% transaction fee.
- Business accounts cannot exceed the overdraft limit of -$1,000.
- Transfers withdraw money from the source account before depositing it into the destination account.
- No use of `any` or unnecessary type assertions.

---

## Topics Covered

- Abstract Classes
- Inheritance
- Interfaces
- Method Overriding
- Access Modifiers
- Encapsulation
- Polymorphism
- Object-Oriented Programming
- Type Safety
- Strict Mode