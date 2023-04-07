/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets [i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets" e stampa l'array ordinato in console.
*/

pets.sort();

console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione e stampa l'array in console.
*/

const firstPet = pets.shift();
pets.push(firstPet);

console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta e stampa l'array in console.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i =  0; i < cars.length; i++) {
  cars[i].licensePlate = 'ec998kh';
}

console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto e stampa l'array in console.
*/

cars.push({
  brand: 'Audi',
  model: 'q2',
  color: 'black',
  trims: ['lega', 'gt'],
  licensePlate: 'ec998kh',
})

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito e stampa in console l'array justTrims così popolato.
*/

const justTrims = []

for  (let  i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* METODO CON for of e charAt

for (let auto of cars) {
  if (auto.color.charAt(0) === 'b') {
    console.log('fizz');
  } else {
    console.log('buzz');
  }
}
*/


/* METODO 2

for (let i = 0; i < cars.length; i++) {
  const primaLettera = cars[i].color[0];
  if (primaLettera === 'b') {
console.log('Fizz');
}else{
  console.log('Bizz');
}
}
*/


//METODO CON SLICE

for (let i = 0; i < cars.length; i++) {
  const primaLettera = cars[i].color.slice(0, 1);
  if (primaLettera === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32 escluso.
*/

const numeriArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while ( numeriArray[i] !== 32) {
  console.log(numeriArray[i]);
  i++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case 'a':
      newArray.push(1);
      break;
    case 'b':
      newArray.push(2);
      break;
    case 'c':
      newArray.push(3);
      break;
    case 'd':
      newArray.push(4);
      break;
    case 'e':
      newArray.push(5);
      break;
    case 'f':
      newArray.push(6);
      break;
    case 'g':
      newArray.push(7);
      break;
    case 'h':
      newArray.push(8);
      break;
    case 'i':
      newArray.push(9);
      break;
    case 'l':
      newArray.push(10);
      break;
    case 'm':
      newArray.push(11);
      break;
    case 'n':
      newArray.push(12);
      break;
    case 'o':
      newArray.push(13);
      break;
    case 'p':
      newArray.push(14);
      break;
    case 'q':
      newArray.push(15);
      break;
    case 'r':
      newArray.push(16);
      break;
    case 's':
      newArray.push(17);
      break;
    case 't':
      newArray.push(18);
      break;
    case 'u':
      newArray.push(19);
      break;
    case 'v':
      newArray.push(20);
      break;
    case 'z':
        newArray.push(21);
        break;
    default:
      newArray.push(null);
  }
}

console.log(newArray);
