//classe
var User = /** @class */ (function () {
    function User() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.20 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate += 1;
        }
        else {
            this.carica = 0;
            this.numeroChiamate += 1;
        }
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//oggetto con le istanze 
var users = {
    "1": new User(),
    "2": new User(),
    "3": new User()
};
//funzioni per prendere i valori dagli input in html 
function ricarica() {
    var userId = Number(document.getElementById("users").value);
    var value = Number(document.getElementById("ricarica").value);
    var user = users[userId];
    user.ricarica(value);
}
function chiamata() {
    var userId = Number(document.getElementById("users").value);
    var value = Number(document.getElementById("chiamata").value);
    var user = users[userId];
    user.chiamata(value);
}
function azzeraChiamate() {
    var userId = Number(document.getElementById("users").value);
    var user = users[userId];
    user.azzeraChiamate();
}
function checkUser() {
    var userId = document.getElementById("users").value;
    var user = users[userId];
    if (user) {
        var saldo = user.numero404();
        console.log("L'utente ".concat(userId, " ha un saldo residuo di: ").concat(saldo, " euro e ha effettuato ").concat(user.getNumeroChiamate(), " chiamate."));
        if (saldo <= 0) {
            console.log("L'utente ".concat(userId, " ha esaurito il credito."));
        }
    }
}
