const numeroCasuale = (): number => {
  return Math.floor(Math.random() * 100 + 1);
};

enum Numeri {
  giocatore1 = numeroCasuale(),
  giocatore2 = numeroCasuale(),
  numeroEstratto = numeroCasuale(),

}



const Gioco = (): void => {
  console.log(`Giocatore uno: ${Numeri.giocatore1}`);
  console.log(`Giocatore due: ${Numeri.giocatore2}`);
  console.log(`Numero estratto: ${Numeri.numeroEstratto}`);

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
