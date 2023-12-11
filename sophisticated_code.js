/* sophisticated_code.js - Sophisticated and Complex Code Example */

// This code is a simulation of a banking system with multiple functionalities and operations.

class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
    this.transactions = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  createAccount(customer, initialDeposit) {
    const accountNumber = Math.floor(Math.random() * 1000000000);
    const account = new Account(accountNumber, customer, initialDeposit);
    this.accounts.push(account);
    return account;
  }

  deleteAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index > -1) {
      this.accounts.splice(index, 1);
    }
  }

  deposit(account, amount) {
    const transaction = new Transaction(account, amount, "deposit");
    this.transactions.push(transaction);
    account.balance += amount;
  }

  withdraw(account, amount) {
    if (account.balance >= amount) {
      const transaction = new Transaction(account, amount, "withdraw");
      this.transactions.push(transaction);
      account.balance -= amount;
    } else {
      throw new Error("Insufficient balance!");
    }
  }

  transfer(fromAccount, toAccount, amount) {
    if (fromAccount.balance >= amount) {
      const transaction = new Transaction(fromAccount, amount, `transfer to ${toAccount.accountNumber}`);
      this.transactions.push(transaction);
      fromAccount.balance -= amount;
      toAccount.balance += amount;
    } else {
      throw new Error("Insufficient balance!");
    }
  }

  displayCustomers() {
    console.log("*** Customers ***");
    this.customers.forEach((customer) => {
      console.log(`Customer Name: ${customer.name}`);
      console.log(`Customer ID: ${customer.id}`);
    });
  }

  displayAccounts() {
    console.log("*** Accounts ***");
    this.accounts.forEach((account) => {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Customer Name: ${account.customer.name}`);
      console.log(`Balance: $${account.balance}`);
    });
  }

  displayTransactions() {
    console.log("*** Transactions ***");
    this.transactions.forEach((transaction) => {
      console.log(`Account Number: ${transaction.account.accountNumber}`);
      console.log(`Type: ${transaction.type}`);
      console.log(`Amount: $${transaction.amount}`);
    });
  }
}

class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class Account {
  constructor(accountNumber, customer, initialDeposit) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = initialDeposit;
  }
}

class Transaction {
  constructor(account, amount, type) {
    this.account = account;
    this.amount = amount;
    this.type = type;
  }
}

// Usage:

const bank = new Bank("My Bank");

const customer1 = new Customer("John Doe", 123456);
const customer2 = new Customer("Jane Smith", 789012);

bank.addCustomer(customer1);
bank.addCustomer(customer2);

const account1 = bank.createAccount(customer1, 1000);
const account2 = bank.createAccount(customer2, 5000);

bank.deposit(account1, 500);
bank.deposit(account2, 1000);

bank.withdraw(account1, 200);
bank.withdraw(account2, 300);

bank.transfer(account2, account1, 800);

bank.displayCustomers();
bank.displayAccounts();
bank.displayTransactions();