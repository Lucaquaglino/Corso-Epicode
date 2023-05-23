var numeroCasuale = function () {
    return Math.floor(Math.random() * 100 + 1);
};
var Numeri;
(function (Numeri) {
    Numeri[Numeri["giocatore1"] = numeroCasuale()] = "giocatore1";
    Numeri[Numeri["giocatore2"] = numeroCasuale()] = "giocatore2";
    Numeri[Numeri["numeroEstratto"] = numeroCasuale()] = "numeroEstratto";
})(Numeri || (Numeri = {}));
var estratto = document.getElementById('dadoCasuale');
estratto.innerHTML = "Numero estratto: ".concat(Numeri.numeroEstratto);
var Gioco = function () {
    console.log("Giocatore uno: ".concat(Numeri.giocatore1));
    console.log("Giocatore due: ".concat(Numeri.giocatore2));
    console.log("Numero estratto: ".concat(Numeri.numeroEstratto));
    switch (true) {
        case Number(Numeri.giocatore1) === Numeri.numeroEstratto:
            console.log("Il giocatore 1 ha indovinato!");
            break;
        case Number(Numeri.giocatore2) === Numeri.numeroEstratto:
            console.log("Il giocatore 2 ha indovinato!");
            break;
        case Math.abs(Numeri.numeroEstratto - Numeri.giocatore1) <
            Math.abs(Numeri.numeroEstratto - Numeri.giocatore2):
            console.log("Nessuno ha vinto ma il giocatore 1 si è avvicinato di più");
            break;
        case Math.abs(Numeri.numeroEstratto - Numeri.giocatore2) <
            Math.abs(Numeri.numeroEstratto - Numeri.giocatore1):
            console.log("Nessuno ha vinto ma il giocatore 2 si è avvicinato di più");
            break;
        default:
            console.log("Pareggio!");
            break;
    }
};
Gioco();
