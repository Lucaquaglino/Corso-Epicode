const nameInput = document.getElementById("name");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");

const newArray = [];

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  const nuovoNome = {
    nome: nameInput.value,
  };

  newArray.push(nuovoNome);

  const nomiStringa = JSON.stringify(newArray);

  localStorage.setItem("nome", nomiStringa);

  nameInput.value = "";

  aggiuntaNomi();
});

const aggiuntaNomi = function () {
  let nomi = document.querySelector("ul");

  nomi.innerHTML = "";

  newArray.forEach((contact) => {
    const newLi = document.createElement("li");
    newLi.innerText = contact.nome;
    nomi.appendChild(newLi);
  });
};

removeButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.removeItem("nome");
  let nomi = document.querySelector("ul");
  nomi.innerHTML = "";
});
