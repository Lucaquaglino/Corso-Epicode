// ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  // Metodo

  comparatoreEta(utenti) {
    if (this.age > utenti.age) {
      return `${this.firstName} è più vecchio di${utenti.firstName}`;
    } else if (this.age < utenti.age) {
      return `${this.firstName} è più giovane di ${utenti.firstName}`;
    } else {
      return `${this.firstName} e ${utenti.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Luca", "Quaglino", 25, "Milano");
const user2 = new User("Giuseppe", "Verdi", 29, "Roma");
const user3 = new User("Antonio", "Rossi", 23, "Napoli");
const user4 = new User("Marco", "Bianchi", 23, "Bologna");

console.log(user1);
console.log(user1.comparatoreEta(user2));
console.log(user2.comparatoreEta(user3));
console.log(user4.comparatoreEta(user3));

// ESERCIZIO 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

//   Metodo
  comparatoreProprietari(utenti) {
    if (this.ownerName === utenti.ownerName) {
      return true
    } else {
        return false
    }
  }
};

const animale1 = new Pet("fuffy","luca","cane","volpino")
const animale2 = new Pet("billy","luca","cane","pastore tedesco")
const animale3 = new Pet("rush","angela","cane","volpino")
console.log(animale1.comparatoreProprietari(animale2));
console.log(animale1.comparatoreProprietari(animale3));



const form = document.querySelector("form");
const petList = document.querySelector("#listaAnimali");

const pets = [];

function aggiuntaAnimale() {
  listaAnimali.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    const li = document.createElement("li");
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}), Proprietario ${pet.ownerName}`;
    listaAnimali.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = event.target.elements.petName.value;
  const ownerName = event.target.elements.ownerName.value;
  const species = event.target.elements.species.value;
  const breed = event.target.elements.breed.value;

  const pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet);

  event.target.reset();
  aggiuntaAnimale();
});
