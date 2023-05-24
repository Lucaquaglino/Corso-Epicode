/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function esercizio1(stringa1, stringa2){

const stringa1s = stringa1.slice(0,2)
const stringa2s = stringa2.slice(-3)
const stringaFinale = (stringa1s + stringa2s).toUpperCase();
return stringaFinale

}

console.log(esercizio1('pippo', 'paperino'))
/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
//NO VALORI RIPETUTI 

function esercizio2(){
  const array = []
  for (let i = 0;  i <10; i++) {
    const primoArray = ( Math.floor(Math.random() * 101));
    if (!array.includes(primoArray)) {
      array.push(primoArray)
    }else{
      i--;
    }
    }
  return array
}


console.log(esercizio2())


function esercizio2(){
  const array = [];
  let count = 0;
  for (let i = 0; count < 10; i++) {
    const primoArray = Math.floor(Math.random() * 101);
    if (!array.includes(primoArray)) {
      array.push(primoArray);
      count++;
    }
  }
  return array;
}

console.log(esercizio2());

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

function esercizio3(arrayNum){
  const array=  arrayNum.filter(x => x %2 === 0);
  return array

}

const arrayNum = [1, 3, 4, 6, 9, 12, 16]

console.log(esercizio3(arrayNum))
/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

function sommaArray(arrayNumeri){
  let somma = 0;
  for(let x of arrayNumeri){
    somma += x;
  }
  return somma;
}

const arrayNumeri =[3, 6, 7] 
console.log(sommaArray(arrayNumeri));


/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

function sommaArray(arrayNumeri){
  return arrayNumeri.reduce((acc, cur)=> acc + cur, 0)
}

console.log(sommaArray(arrayNumeri))
/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function nuoviArray (arrayNumeri, n){
  const arrayIncrementato = []
  for (let i = 0; i < arrayNumeri.length; i++) {
    arrayIncrementato.push(arrayNumeri[i]+n);
    
  }
  return arrayIncrementato
}

const n = 3;
console.log(nuoviArray(arrayNumeri, n))

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function lunghezza(arrayStringhe){
  const lunghezze= []
  for (let i = 0; i < arrayStringhe.length; i++) {
    lunghezze.push(arrayStringhe[i].length)
    
  }
  return lunghezze
}
const arrayStringhe = ["EPICODE", "is", "great"];
console.log(lunghezza(arrayStringhe))

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function arrayDispari() {
  let i = 1;
  const array = [];
  while (i <= 99) {
    array.push(i);
    i += 2;
  }
  return array;
}

console.log(arrayDispari())



/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function filmVecchio(movies) {
  let piuVecchio = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < parseInt(piuVecchio.Year)) {
      piuVecchio = movies[i];
    }
  }
  console.log(`il film più vecchio è "${piuVecchio.Title}" (${piuVecchio.Year})`);
  return piuVecchio;

}

filmVecchio(movies)
/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroFilm(movies) {
  return movies.length;
}

console.log(numeroFilm(movies))

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
  function titoliFilm(movies) {
  var titoli = [];
  for (var i = 0; i < movies.length; i++) {
    titoli.push(movies[i].Title);
  }
  return titoli;
}

console.log(titoliFilm(movies))


function titoliFilm(movies) {
  return movies.filter(movie => movie.Title);
}

console.log(titoliFilm(movies))


/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filNuovoMillenio(movies) {
  return movies.filter(movie => parseInt(movie.Year) > 2000);
}

console.log(filNuovoMillenio(movies))

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function filmSpecifico(movies) {
    for (let movie of movies) {
      if (movie.imdbID === 'tt2395427') {
        return movie;
      }
    }
    return null; 
  
}

console.log(filmSpecifico(movies))
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnni(movies) {
  let somma = 0;
  for (let movie of movies) {
    somma += parseInt(movie.Year);
  }
  return somma;
}

console.log(sommaAnni(movies))




/* ESERCIZIO 16 SUPER DIFFICILE */
const movieSelect = document.getElementById('movies');

movies.forEach((movie) => {
  const option = document.createElement('option');
  option.value = movie.Title;
  option.text = `${movie.Title}`;
  movieSelect.appendChild(option);
});


const schedaButton = document.getElementById('bnt-search');
const schedaDiv = document.getElementById('scheda');

schedaButton.addEventListener('click', (event) => {
  event.preventDefault();
  const selectedOption = movieSelect.options[movieSelect.selectedIndex];
  const title = selectedOption.value;
  const movie = movies.find(m => m.Title === title);

  const titleElement = document.createElement('h2');
  titleElement.textContent= movie.Title;

  const yearElement = document.createElement('p');
  yearElement.textContent = `Anno: ${movie.Year}`;

  const posterElement = document.createElement('img');
  posterElement.setAttribute('src', movie.Poster);
  

  schedaDiv.innerHTML = '';
  schedaDiv.appendChild(titleElement);
  schedaDiv.appendChild(yearElement);
  schedaDiv.appendChild(posterElement);
});




//esercizio 2 terzo metodo

function generateRandomArray() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 101);
    for (let j = 0; j < i; j++) {
      if (arr[j] === randomNum) {
        randomNum = Math.floor(Math.random() * 101);
        j = -1;
      }
    }
    arr.push(randomNum);
  }
  return arr;
}


console.log(generateRandomArray())