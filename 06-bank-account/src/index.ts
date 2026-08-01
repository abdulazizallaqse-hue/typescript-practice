// Generic bank account.
// Contains the common logic shared by all account types.
abstract class BankAccount implements Transferable {
  constructor(
    private readonly accountId: string,
    public readonly ownerName: string,
    protected balance: number
  ) {}

  // Deposit money.
  // Reject zero or negative amounts.
  deposit(amount: number): void{
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance += amount;
  }

  // Every account has its own withdrawal rules.
  // Child classes must implement this method.
  abstract withdraw(amount: number): void;

  // Return the current account balance.
  getBalance(): number{
    return this.balance;
  }

  // Transfer money from this account to another account.
  // Withdraw from the source, then deposit into the destination.
  transfer(destination: BankAccount, amount: number): void {
    this.withdraw(amount);
    destination.deposit(amount);
}
}


// Charges a fixed $2 fee for every withdrawal.
// Cannot withdraw more than the available balance.
class SavingsAccount extends BankAccount {

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount+2 > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= (amount + 2);
    }
    
}


// Charges a 1% withdrawal fee.
// Balance cannot go below -1000.
class BusinessAccount extends BankAccount{


    withdraw(amount: number): void {
        const fee = amount * 0.01;
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if ( this.balance- (amount + fee)< -1000) {
            throw new Error("Balance cannot be less than -1000");
        }
        this.balance -= (amount + fee);
    }
}

// Interface for accounts that support money transfers.
interface Transferable {
  transfer(
    destination: BankAccount,
    amount: number
  ): void;
}



//examples

const savings = new SavingsAccount(
  "ACC-1",
  "Ahmed",
  1000
);

savings.deposit(200);
savings.withdraw(100);

console.log(savings.getBalance());

// Expected balance:

// 1098

// Explanation:

// 1000 + 200 - 100 - 2 = 1098

// Business account example:

const business = new BusinessAccount(
  "ACC-2",
  "Ahmed Company",
  500
);

business.withdraw(600);

console.log(business.getBalance());

// Expected balance:

// -106

// Explanation:

// 500 - 600 - 6 = -106

// Transfer example:

savings.transfer(business, 100);

