class Prodotto {
	id: number;
	codprod: number;
	collezione: string;
	capo: string;
	modello: number;
	quantita: number;
	colore: string;
	prezzoivaesclusa: number;
	prezzoivainclusa: number;
	disponibile: string;
	saldo: number;

	constructor(
		_id: number,
		_codprod: number,
		_collezione: string,
		_capo: string,
		_modello: number,
		_quantita: number,
		_colore: string,
		_prezzoivaesclusa: number,
		_prezzoivainclusa: number,
		_disponibile: string,
		_saldo: number
	) {
		this.id = _id;
		this.codprod = _codprod;
		this.collezione = _collezione;
		this.capo = _capo;
		this.modello = _modello;
		this.quantita = _quantita;
		this.colore = _colore;
		this.prezzoivaesclusa = _prezzoivaesclusa;
		this.prezzoivainclusa = _prezzoivainclusa;
		this.disponibile = _disponibile;
		this.saldo = _saldo;
	}
	getsaldocapo(): number {
		return (this.prezzoivainclusa * this.saldo) / 100;
	}
	getacquistocapo(): number {
		return this.prezzoivainclusa - this.getsaldocapo();
	}
}
let newPrice: number;

async function cicloProdotti(): Promise<void> {
    try {
        const response = await fetch('./Abbigliamento.json');
        if (response.ok) {
            const data = await response.json();
            data.forEach(element => {
                let capo = new Prodotto(
                    element.id,
                    element.codprod,
                    element.collezione,
                    element.capo,
                    element.modello,
                    element.quantita,
                    element.colore,
                    element.prezzoivaesclusa,
                    element.prezzoivainclusa,
                    element.disponibile,
                    element.saldo
                );
                console.log(capo);
                newPrice = capo.getacquistocapo();
                console.log("Prezzo scontato:", newPrice);
            });
        } 
    } catch (error) {
        console.log('ERRORE API', error);
    }
}

cicloProdotti();