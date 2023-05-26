
//interfaccia 
interface Smartphone {
    carica: number; 
    numeroChiamate: number; 

    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}
//classe

class User implements Smartphone {
    carica = 0; 
    numeroChiamate = 0;

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        const costoChiamata = 0.20 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate += 1;
        } else {
            this.carica= 0;
            this.numeroChiamate += 1;
        }
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

//oggetto con le istanze 
const users: { [key: string]: Smartphone } = {
  "1": new User(),
  "2": new User(),
  "3": new User()

};


 //funzioni per prendere i valori dagli input in html 
 
function ricarica() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const value = Number((<HTMLInputElement>document.getElementById("ricarica")).value);
  const user = users[userId];
  user.ricarica(value);
}

function chiamata() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const value = Number((<HTMLInputElement>document.getElementById("chiamata")).value);
  const user = users[userId];
  user.chiamata(value);
}

function azzeraChiamate() {
  const userId = Number((<HTMLSelectElement>document.getElementById("users")).value);
  const user = users[userId];
  user.azzeraChiamate();
}


function checkUser() {
  const userId = (<HTMLSelectElement>document.getElementById("users")).value;
  const user = users[userId];
  if (user) {
    const saldo = user.numero404();
    console.log(`L'utente ${userId} ha un saldo residuo di: ${saldo} euro e ha effettuato ${user.getNumeroChiamate()} chiamate.`);
    if (saldo <= 0) {
      console.log(`L'utente ${userId} ha esaurito il credito.`);
    }
  }
}



