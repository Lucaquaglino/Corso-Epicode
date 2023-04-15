/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log('%cESECIZIO 1 :','color:red');


function area(l1, l2){
    return(l1*l2);
};

console.log (area(12, 89));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 2 :','color:red');

function crazySum(num1, num2){
    if(num1===num2){
        return (num1 + num2)*3;
    } else{
        return(num1 + num2);
    };   
};

console.log(crazySum(45, 74));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 3 :','color:red');

function crazyDiff(n){
    if(n >19){
        Math.abs(n-19)*3;
    }
    return Math.abs(n-19)
    }

    console.log(crazyDiff(3))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 4 :','color:red');

function boundary(n){
    if(n===400 || (n > 20 && n<= 100)){
        return true;
    }else{
        return false;
    }
}

console.log(boundary(21));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 5 :','color:red');

let ciao= 'come va';

function epify(ciao) {
    return ciao.startsWith('EPICODE') ? ciao : 'EPICODE ' + ciao;
  }

  console.log(epify(ciao));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 6 :','color:red');

function check3and7(nPos){
    if( nPos % 3=== 0 ||  nPos % 7 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(check3and7(5))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log('%cESECIZIO 7 :','color:red');

function reverString(string){
    return string.split('').reverse().join('');
}

console.log(reverString('EPICODE'))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 8 :','color:red');

function upperFirst(stringg) {
    var parole = stringg.split(' '); 
    var nuovaStringg= ''
    
    for (var i = 0; i < parole.length; i++) {
     nuovaStringg += parole[i].charAt(0).toUpperCase() + parole[i].slice(1)+ ' ';
    }
    
    return nuovaStringg;
  }

  
  console.log(upperFirst('ciao come va'))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log('%cESECIZIO 9 :','color:red');

function cutString(bella){
    return bella.slice(1, -1);
}

console.log(cutString('bella'));




/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO 10 :','color:red');

function giveMeRandom(n2){
    const newArray = []
    for (let i = 0; i < n2; i++) {
        newArray.push(Math.floor(Math.random() * 11));
        
    }

    return newArray
    

}

console.log(giveMeRandom(11))

// Esercizi Extra ----------------------------------------------------------------------------------------------------------------------------------------------------

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */








/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO EXTRA 2 :','color:red');

const shoppingCart=[
    {
    price:10,
    name:'iphone',
    id: 'telefono',
    quantity:5,
    },
    {
    price:8,
    name:'ipad',
    id: 'tablet',
    quantity:1,
    },
    {  
    price:10,
    name:'macBook',
    id: 'pc',
    quantity:2,
    }
]

function shoppingCartTotal(total){
    let carrello = 0
    for (let i = 0; i < total.length; i++) {
     carrello += total[i].price* total[i].quantity;
        
    }
    return carrello
    
}

console.log(shoppingCartTotal(shoppingCart))
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

console.log('%cESECIZIO EXTRA 3 :','color:red');

const nuovoOggetto = { price: 15, name: "AirPods", id: "accessorio", quantity: 3 };

function addToShoppingCart (nuovoOggetto){
    shoppingCart.push(nuovoOggetto)
    return shoppingCart.length

}

console.log(addToShoppingCart(nuovoOggetto))




/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA

function longest(n){
    let stringaPiuLunga = ''
    for (let i = 0; i < n.length; i++) {
        if(n[i].length)
        
    }
}

 */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('%cESECIZIO EXTRA 9 :','color:red');

function email(emailContent) {
    if (emailContent.includes('SPAM') || emailContent.includes('SCAM')) {
      return false;
    } else {
      return true;
    }
}
  
  const email1 = 'Ciao, ti contatto in merito a......'
  const email2 = 'email di SPAM'
  const email3 = 'email SCAM'
  console.log(email(email1)); 
  console.log(email(email2)); 
  console.log(email(email3));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function matrixGenerator(x, y) {
    const result = [];
  
    for (let i = 0; i < x; i++) {
    
  
      for (let j = 0; j < y; j++) {
        const value = `${i}${j}`;
        result.push(value);
      }
  
      return result;
    }
  
    
  }
  
  const x = 3;
  const y = 2;
  const matrix = matrixGenerator(x, y);
  console.log(matrix);
  