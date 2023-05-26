var User = /** @class */ (function () {
    function User() {
        this.carica = 0;
        this.chiamate = [];
        this.chiamataInCorso = null;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.iniziaChiamata = function () {
        this.chiamataInCorso = { inizio: new Date(), fine: new Date() };
    };
    User.prototype.terminaChiamata = function () {
        if (this.chiamataInCorso === null) {
            console.error("Devi prima iniziare una chiamata.");
            return;
        }
        this.chiamataInCorso.fine = new Date();
        var durataChiamata = (this.chiamataInCorso.fine.getTime() - this.chiamataInCorso.inizio.getTime()) / 1000 / 60; // durata in minuti
        var costoChiamata = 10 * durataChiamata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.chiamate.push(this.chiamataInCorso);
        }
        else {
            console.error(" Il tuo credito \u00E8 esaurito!!!");
            this.carica = 0;
        }
        this.chiamataInCorso = null;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.chiamate.length;
    };
    User.prototype.azzeraChiamate = function () {
        this.chiamate = [];
    };
    return User;
}());
//oggetto con le istanze 
var users = {
    "1": new User(),
    "2": new User(),
    "3": new User()
};
function ricarica() {
    var userId = Number(document.getElementById("users").value);
    var value = Number(document.getElementById("ricarica").value);
    var user = users[userId];
    user.ricarica(value);
    value = 0;
}
function azzeraChiamate() {
    var userId = Number(document.getElementById("users").value);
    var user = users[userId];
    user.azzeraChiamate();
    var durataChiamataElement = document.getElementById("durataChiamata");
    durataChiamataElement.innerText = "";
    var numeroChiamateElement = document.getElementById("numeroChiamate");
    numeroChiamateElement.innerText = "";
}
function checkUser() {
    var userId = Number(document.getElementById("users").value);
    var user = users[userId];
    var saldoResiduoElement = document.getElementById("saldoResiduo");
    var numeroChiamateElement = document.getElementById("numeroChiamate");
    if (user) {
        saldoResiduoElement.innerText = "Il tuo saldo residuo \u00E8 di: ".concat(user.numero404().toFixed(2), " euro.");
        numeroChiamateElement.innerText = "Hai effettuato ".concat(user.getNumeroChiamate(), " chiamate.");
        console.log("Il credito dell'utente ".concat(userId, " \u00E8: ").concat(user.numero404().toFixed(2), " \u20AC"));
        console.log("L'utente ".concat(userId, " ha effettuato ").concat(user.getNumeroChiamate(), " chiamate."));
        user.chiamate.forEach(function (chiamata, i) {
            var durataChiamata = (chiamata.fine.getTime() - chiamata.inizio.getTime()) / 1000 / 60; // durata in minuti
            var durataChiamataElement = document.getElementById("durataChiamata");
            durataChiamataElement.innerText = "Chiamata ".concat(i + 1, ": Durata ").concat(durataChiamata.toFixed(2), " minuti");
            console.log("Chiamata ".concat(i + 1, ": Durata ").concat(durataChiamata.toFixed(2), " minuti"));
        });
        if (user.numero404() === 0) {
            console.error("L'utente ".concat(userId, " ha esaurito il credito."));
        }
    }
}
var inizioChiamata = null;
var timerIntervalId = null;
var timerSeconds = 0;
function iniziaChiamata() {
    var userId = Number(document.getElementById("users").value);
    var user = users[userId];
    user === null || user === void 0 ? void 0 : user.iniziaChiamata();
    timerSeconds = 0;
    timerIntervalId = window.setInterval(function () {
        timerSeconds++;
        //AGGIORNA IL TEMPO DEL TIMER
        var timerDisplay = document.getElementById("timerDisplay");
        timerDisplay.style.display = "block";
        if (timerDisplay) {
            timerDisplay.innerText = "Telefonata: ".concat(timerSeconds, " secondi");
            var cardbody = document.getElementById("card");
            if (cardbody) {
                cardbody.style.backgroundColor = "green";
            }
        }
    }, 1000);
}
function terminaChiamata() {
    var userId = Number(document.getElementById("users").value);
    var user = users[userId];
    user === null || user === void 0 ? void 0 : user.terminaChiamata();
    // FERMA TIMER E ELIMINALO
    if (timerIntervalId !== null) {
        window.clearInterval(timerIntervalId);
        timerIntervalId = null;
        var timerDisplay = document.getElementById("timerDisplay");
        timerDisplay.style.display = "none";
        var cardbody = document.getElementById("card");
        if (cardbody) {
            cardbody.style.backgroundColor = "black";
        }
    }
}
