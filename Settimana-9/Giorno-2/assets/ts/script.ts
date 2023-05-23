// Classe generica


class Utente {
  balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(euro: number): void {
    this.balance += euro;
  }

  withdraw(euro: number): void {
    this.balance -= euro;
  }

  getBalance(): number {
    return this.balance;
  }
}


class SonAccount extends Utente {
  constructor() {
    super(0);
    console.log("Saldo iniziale di SonAccount:", this.balance, "€");
  }

  oneDeposit(euro: number): void {
    this.deposit(euro);
    console.log("Deposito 1 SonAccount:", euro, "€");
  }

  onewithdraw(euro: number): void {
    this.withdraw(euro);
    console.log("Prelievo 1 SonAccount:", euro, "€");
  }

  twodeposit(euro: number): void {
    this.deposit(euro);
    console.log("Deposito 2 SonAccount:", euro, "€");
  }

  twowithdraw(euro: number): void {
    this.withdraw(euro);
    console.log("Prelievo 2 SonAccount:", euro, "€");
  }
}

class MotherAccount extends Utente {
  constructor() {
    super(0);
    console.log("Saldo iniziale di MotherAccount:", this.balance, "€");
  }

  oneDeposit(euro: number): void {
    this.deposit(euro);
    console.log("Deposito 1 MotherAccount:", euro, "€");
  }

  onewithdraw(euro: number): void {
    this.withdraw(euro);
    console.log("Prelievo 1 MotherAccount:", euro, "€");
  }

  twodeposit(euro: number): void {
    this.deposit(euro);
    console.log("Deposito 2 MotherAccount:", euro, "€");
  }

  twowithdraw(euro: number): void {
    this.withdraw(euro);
    console.log("Prelievo 2 MotherAccount:", euro, "€");
  }

  addInterest(): void {
    const interessi = this.balance * (10 / 100);
    this.deposit(interessi);
    console.log("Interessi MotherAccount:", interessi, "€");
  }
}

const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

// metodo deposito e ritiro soldi
sonAccount.oneDeposit(400);
sonAccount.onewithdraw(200);
sonAccount.twodeposit(2000);
sonAccount.twowithdraw(200);

motherAccount.oneDeposit(500);
motherAccount.onewithdraw(200);
motherAccount.twodeposit(1000);
motherAccount.twowithdraw(300);
motherAccount.addInterest();

console.log("Saldo conto SonAccount:", sonAccount.getBalance(), "€");
console.log("Saldo conto MotherAccount:", motherAccount.getBalance(), "€");
