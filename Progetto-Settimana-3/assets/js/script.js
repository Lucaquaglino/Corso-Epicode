/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(
  " %c******************************* ESECIZIO A *******************************",
  "color:red"
);

var sum = 20 + 10;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log(
  " %c******************************* ESECIZIO B *******************************",
  "color:red"
);

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log(
  " %c******************************* ESECIZIO C *******************************",
  "color:red"
);

let me = {
  name: "Il tuo nome",
  surname: "Il tuo cognome",
  age: "La tua età",
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(
  " %c******************************* ESECIZIO D *******************************",
  "color:red"
);

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log(
  " %c******************************* ESECIZIO E *******************************",
  "color:red"
);

me.skills = ["c", "python", "java"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  " %c******************************* ESECIZIO F *******************************",
  "color:red"
);

me.skills.push("c#");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log(
  " %c******************************* ESECIZIO G *******************************",
  "color:red"
);

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(
  " %c******************************* ESECIZIO 1 *******************************",
  "color:red"
);

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(
  " %c******************************* ESECIZIO 2 *******************************",
  "color:red"
);

var whoIsBigger = (num1, num2) => (num1 > num2 ? num1 : num2);
console.log(whoIsBigger(0, 4));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log(
  " %c******************************* ESECIZIO 3 *******************************",
  "color:red"
);

var splitMe = (stringa) => stringa.split(" ");
console.log(splitMe("pippo pluto e paperino"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(
  " %c******************************* ESECIZIO 4 *******************************",
  "color:red"
);

var deleteOne = (stringa, boolean) => {
  return boolean ? stringa.slice(1, stringa.length) : stringa.slice(0, -1);
};
console.log(deleteOne("epicode", true));
console.log(deleteOne("epicode", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(
  " %c******************************* ESECIZIO 5 *******************************",
  "color:red"
);

var onlyLetters = (stringa) => stringa.replace(/[0-9]?/g, "");
console.log(onlyLetters("ci sono 2 coccodrilli"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log(
  " %c******************************* ESECIZIO 6 *******************************",
  "color:red"
);

function isThisAnEmail(stringa) {
  const controlloMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return controlloMail.test(stringa);
}
console.log(isThisAnEmail("quagli.luca@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(
  " %c******************************* ESECIZIO 7 *******************************",
  "color:red"
);

function whatDayIsIt() {
  const giorni = [
    "Domenica",
    "Lunedi",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return giorni[new Date().getDay()];
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(
  " %c******************************* ESECIZIO 8 *******************************",
  "color:red"
);

function rollTheDices(n) {
  let sum = 0;
  const values = [];
  for (let i = 0; i < n; i++) {
    let risultatoDice = dice();
    values.push(risultatoDice);
    sum += risultatoDice;
  }
  const risultato = { sum, values };
  return risultato;
}
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log(
  " %c******************************* ESECIZIO 9 *******************************",
  "color:red"
);

function howManyDays(data) {
  const oggi = new Date();
  const differenzaGiorni =
    (oggi.getTime() - data.getTime()) / (1000 * 3600 * 24);
  return Math.floor(differenzaGiorni);
}
console.log(howManyDays(new Date("1991-05-07")));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(
  " %c******************************* ESECIZIO 10 *******************************",
  "color:red"
);

function isTodayMyBirthday(data) {
  const oggi = new Date();
  return (
    oggi.getMonth() === data.getMonth() && data.getDate() === oggi.getDate()
  );
}

console.log(isTodayMyBirthday(new Date("1991-05-07")));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log(
  " %c******************************* ESECIZIO 11 *******************************",
  "color:red"
);

const oggetto = {
  nome: "pippo",
  stringa: "ciao",
  amico: "paperino",
};

function deleteProp(oggett, string) {
  delete oggett[string];
  return oggett;
}

console.log(deleteProp(oggetto, "stringa"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log(
  " %c******************************* ESECIZIO 12 *******************************",
  "color:red"
);

function newestMovie(movies) {
  let piuRecente = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > parseInt(piuRecente.Year)) {
      piuRecente = movies[i];
    }
  }

  return `il film più recente è "${piuRecente.Title}" (${piuRecente.Year})`;
}

console.log(newestMovie(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log(
  " %c******************************* ESECIZIO 13 *******************************",
  "color:red"
);

// METODO 1 - CONTO NUMERO TOTALE DEGLI OGGETTI CONTENUTI NELL' ARRAY MOVIES

function countMovies(movies) {
  return movies.length;
}

console.log(countMovies(movies));

// METODO 2 - CONTO NUMERO TOTALE DEGLI OGGETTI -CON STRINGA 'FILM'- CONTENUTI NELL' ARRAY MOVIES

function countMovies(movies) {
  let a = 0;
  for (b of movies) if (b.Type === "movie") a++;
  return a;
}

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log(
  " %c******************************* ESECIZIO 14 *******************************",
  "color:red"
);

function onlyTheYears(movies) {
  const anni = movies.map(function (film) {
    return film.Year;
  });

  return anni;
}

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(
  " %c******************************* ESECIZIO 15 *******************************",
  "color:red"
);

function onlyInLastMillennium(movies) {
  return movies.filter((movie) => parseInt(movie.Year) <= 2000);
}

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log(
  " %c******************************* ESECIZIO 16 *******************************",
  "color:red"
);

function sumAllTheYears(movies) {
  let somma = 0;
  for (let film of movies) {
    somma += parseInt(film.Year);
  }
  return somma;
}

console.log(sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(
  " %c******************************* ESECIZIO 17 *******************************",
  "color:red"
);

function searchByTitle(stringa) {
  if (!stringa) {
    return [];
  } else {
    return movies.filter((movies) => movies.Title.includes(stringa));
  }
}

console.log(searchByTitle("Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(
  " %c******************************* ESECIZIO 18 *******************************",
  "color:red"
);

//METODO 1

function searchByTitle2(stringa) {
  if (!stringa) {
    return [];
  } else {
    return movies.filter((movies) => !movies.Title.includes(stringa));
  }
}

function searchAndDivide(stringa) {
  const result = {
    match: searchByTitle(stringa),
    unmatch: searchByTitle2(stringa),
  };
  return result;
}

console.log(searchAndDivide("Lord"));

//METODO 2

function searchAndDivide(stringa) {
  const result = {
    match: searchByTitle(stringa),
    unmatch: movies.filter((movies) => !movies.Title.includes(stringa)),
  };
  return result;
}

console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(
  " %c******************************* ESECIZIO 19 *******************************",
  "color:red"
);

function removeIndex(numero) {
  movies.splice(numero, 1);
  return movies;
}

console.log(removeIndex(5));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log(
  " %c******************************* ESECIZIO 20 *******************************",
  "color:red"
);

function trovaContainer() {
  document.getElementById("container");
}

console.log("Vedere pagina script.js RIGA 574");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log(
  " %c******************************* ESECIZIO 21 *******************************",
  "color:red"
);

function prendiTd() {
  document.querySelectorAll("td");
}

console.log("Vedere pagina script.js RIGA 587");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log(
  " %c******************************* ESECIZIO 22 *******************************",
  "color:red"
);

const td = document.getElementsByTagName("td");

for (let i = 0; i < td.length; i++) {
  console.log(td[i].textContent);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log(
  " %c******************************* ESECIZIO 23 *******************************",
  "color:red"
);

function aggiungeBg() {
  for (let link of document.querySelectorAll("a")) {
    link.style.backgroundColor = "red";
  }
}
aggiungeBg();

console.log("Vedere pagina script.js RIGA 615");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log(
  " %c******************************* ESECIZIO 24 *******************************",
  "color:red"
);

const lista = document.createElement("li");
lista.textContent = "cinque";

function aggiuntaElemento(list) {
  document.getElementById("myList").appendChild(list);
}

aggiuntaElemento(lista);

console.log("Vedere pagina script.js RIGA 633");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log(
  " %c******************************* ESECIZIO 25 *******************************",
  "color:red"
);

function svuotaLista() {
  document.getElementById("myList").innerHTML = "";
}

svuotaLista();

console.log("Vedere pagina script.js RIGA 648");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log(
  " %c******************************* ESECIZIO 26 *******************************",
  "color:red"
);

function addClassTestToTr() {
  document.querySelectorAll("tr").forEach((elem) => elem.classList.add("test"));
}
addClassTestToTr();

console.log("Vedere pagina script.js RIGA 663");
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log(
  " %c******************************* ESECIZIO 27 *******************************",
  "color:red"
);

function halfTree(colonna) {
  let riga = "";
  for (let i = 0; i < colonna; i++) {
    riga += "*";

    console.log(riga);
  }
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log(
  " %c******************************* ESECIZIO 28 *******************************",
  "color:red"
);

function halfTreeWithSpace(colonna) {
  for (let i = 1; i <= colonna; i++) {
    let riga = "";
    for (let j = 1; j <= colonna - i; j++) {
      riga += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      riga += "*";
    }
    console.log(riga);
  }
}

halfTreeWithSpace(8);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log(
  " %c******************************* ESECIZIO 29 *******************************",
  "color:red"
);
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));
