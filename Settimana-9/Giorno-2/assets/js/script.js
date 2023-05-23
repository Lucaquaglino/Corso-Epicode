// Classe generica
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Utente = /** @class */ (function () {
    function Utente(initialBalance) {
        this.balance = initialBalance;
    }
    Utente.prototype.deposit = function (euro) {
        this.balance += euro;
    };
    Utente.prototype.withdraw = function (euro) {
        this.balance -= euro;
    };
    Utente.prototype.getBalance = function () {
        return this.balance;
    };
    return Utente;
}());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount() {
        var _this = _super.call(this, 0) || this;
        console.log("Saldo iniziale di SonAccount:", _this.balance, "€");
        return _this;
    }
    SonAccount.prototype.oneDeposit = function (euro) {
        this.deposit(euro);
        console.log("Deposito 1 SonAccount:", euro, "€");
    };
    SonAccount.prototype.onewithdraw = function (euro) {
        this.withdraw(euro);
        console.log("Prelievo 1 SonAccount:", euro, "€");
    };
    SonAccount.prototype.twodeposit = function (euro) {
        this.deposit(euro);
        console.log("Deposito 2 SonAccount:", euro, "€");
    };
    SonAccount.prototype.twowithdraw = function (euro) {
        this.withdraw(euro);
        console.log("Prelievo 2 SonAccount:", euro, "€");
    };
    return SonAccount;
}(Utente));
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        var _this = _super.call(this, 0) || this;
        console.log("Saldo iniziale di MotherAccount:", _this.balance, "€");
        return _this;
    }
    MotherAccount.prototype.oneDeposit = function (euro) {
        this.deposit(euro);
        console.log("Deposito 1 MotherAccount:", euro, "€");
    };
    MotherAccount.prototype.onewithdraw = function (euro) {
        this.withdraw(euro);
        console.log("Prelievo 1 MotherAccount:", euro, "€");
    };
    MotherAccount.prototype.twodeposit = function (euro) {
        this.deposit(euro);
        console.log("Deposito 2 MotherAccount:", euro, "€");
    };
    MotherAccount.prototype.twowithdraw = function (euro) {
        this.withdraw(euro);
        console.log("Prelievo 2 MotherAccount:", euro, "€");
    };
    MotherAccount.prototype.addInterest = function () {
        var interessi = this.balance * (10 / 100);
        this.deposit(interessi);
        console.log("Interessi MotherAccount:", interessi, "€");
    };
    return MotherAccount;
}(Utente));
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
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
