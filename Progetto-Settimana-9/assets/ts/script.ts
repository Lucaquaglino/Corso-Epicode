

interface Chiamata {
  inizio: Date;
  fine: Date;
}

interface Smartphone {
  carica: number; 
  chiamate: Chiamata[];

  ricarica(unaRicarica: number): void;
  iniziaChiamata(): void;
  terminaChiamata(): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  carica = 0; 
  chiamate: Chiamata[] = [];
  chiamataInCorso: Chiamata | null = null;

  public ricarica(unaRicarica: number): void {
      this.carica += unaRicarica;
  }

  public iniziaChiamata(): void {
      this.chiamataInCorso = { inizio: new Date(), fine: new Date() };
  }

  public terminaChiamata(): void {
      if (this.chiamataInCorso === null) {
          console.error("Devi prima iniziare una chiamata.");
          return;
      }

      this.chiamataInCorso.fine = new Date();
      const durataChiamata = (this.chiamataInCorso.fine.getTime() - this.chiamataInCorso.inizio.getTime()) / 1000 / 60; // durata in minuti
      const costoChiamata = 10 * durataChiamata;

      if (this.carica >= costoChiamata) {
          this.carica -= costoChiamata;
          this.chiamate.push(this.chiamataInCorso);
      } else {
          console.error(` Il tuo credito è esaurito!!!`);
          this.carica = 0;
      }

      this.chiamataInCorso = null;
  }

  public numero404(): number {
      return this.carica;
  }

  public getNumeroChiamate(): number {
      return this.chiamate.length;
  }

  public azzeraChiamate(): void {
      this.chiamate = [];
  }
}



//oggetto con le istanze 
const users: { [key: string]: Smartphone } = {
  "1": new User(),
  "2": new User(),
  "3": new User()

};



 
function ricarica() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const value = Number((<HTMLInputElement>document.getElementById("ricarica")).value);
  const user = users[userId];
  user.ricarica(value);
 
}


function azzeraChiamate() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const user = users[userId];
  user.azzeraChiamate();
  const durataChiamataElement = <HTMLParagraphElement>document.getElementById("durataChiamata");
  durataChiamataElement.innerText = ``;
  const numeroChiamateElement = <HTMLParagraphElement>document.getElementById("numeroChiamate");
  numeroChiamateElement.innerText = ``;
}


function checkUser() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const user = users[userId];
  const saldoResiduoElement = <HTMLParagraphElement>document.getElementById("saldoResiduo");
  const numeroChiamateElement = <HTMLParagraphElement>document.getElementById("numeroChiamate");
  
  if (user) {
    saldoResiduoElement.innerText = `Il tuo saldo residuo è di: ${user.numero404().toFixed(2)} euro.`;
    numeroChiamateElement.innerText = `Hai effettuato ${user.getNumeroChiamate()} chiamate.`;
      console.log(`Il credito dell'utente ${userId} è: ${user.numero404().toFixed(2)} €`);
      console.log(`L'utente ${userId} ha effettuato ${user.getNumeroChiamate()} chiamate.`);
      
      user.chiamate.forEach((chiamata, i) => {
          const durataChiamata = (chiamata.fine.getTime() - chiamata.inizio.getTime()) / 1000 / 60; // durata in minuti
          const durataChiamataElement = <HTMLParagraphElement>document.getElementById("durataChiamata");
          durataChiamataElement.innerText = `Chiamata ${i + 1}: Durata ${durataChiamata.toFixed(2)} minuti`;
          console.log(`Chiamata ${i + 1}: Durata ${durataChiamata.toFixed(2)} minuti`);
      });

      if (user.numero404() === 0) {
          console.error(`L'utente ${userId} ha esaurito il credito.`);
      }
  }
}


let inizioChiamata: Date | null = null;
let timerIntervalId: number | null = null;
let timerSeconds: number = 0;

function iniziaChiamata() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const user = users[userId];
  user?.iniziaChiamata();
 
  timerSeconds = 0;
  timerIntervalId = window.setInterval(() => {
    timerSeconds++;
    //AGGIORNA IL TEMPO DEL TIMER
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay!.style.display = "block";
    if (timerDisplay) {
      timerDisplay.innerText = `Telefonata: ${timerSeconds} secondi`;
        const cardbody = document.getElementById("card");
        if(cardbody) {
  cardbody.style.backgroundColor = "green";
        }
    }
  }, 1000);
}

function terminaChiamata() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const user = users[userId];
  user?.terminaChiamata();

  // FERMA TIMER E ELIMINALO
  if (timerIntervalId !== null) {
    window.clearInterval(timerIntervalId);
    timerIntervalId = null;
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay!.style.display = "none";
    const cardbody = document.getElementById("card");
    if(cardbody) {
cardbody.style.backgroundColor = "black";
    }
  }
}


