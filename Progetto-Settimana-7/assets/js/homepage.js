window.onload = () => {
  //DISABILITO LA SELECT
  document.getElementById("productDropdown").style.display = "none";
  // CHIAVE AUTHORIZATION
  let chiave =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODQwNTYyODQsImV4cCI6MTY4NTI2NTg4NH0.WqjgtYzMONCax5PTs_9Jru1hNo5G7Zj7pTtgCrNW7iA";

  // LOADING BAR
  let spinner = document.getElementById("spinner");
  spinner.style.display = "block";
  // Carico a schermo tutti i prodotti dell API con GET
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "GET",
    headers: {
      Authorization: chiave,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    // timer caricamento spinner
    .then((data) => {
      return new Promise((resolve) => setTimeout(resolve, 2000, data));
    })
    .then((data) => {
      console.log("Oggetti ottenuti con successo:", data);
      // creo le card
      let card = "";
      data.forEach((prodotti) => {
        card += `
        <div class=" col-sm-12 col-md-6 col-xl-3 mb-4">
        <div class="card mb-4 shadow-sm h-100">
        <img class="card-img-top immaginiCard"" src="${prodotti.imageUrl}" alt="" srcset="">
          <div class="card-body d-flex flex-column justify-content-end ">
          <h5 class="card-title"> Nome prodotto:
          <span class="text-secondary d-block">${prodotti.name}</span></h5> 
            <p class="card-text"> Brand: 
            <span class="text-secondary d-block">
             ${prodotti.brand}
            </span>
            </p>
            <p class="card-text"> Id prodotto:
            <span class="text-secondary d-block">
            ${prodotti._id}
            </span>
            </p>
            <p class="card-text"> Descrizione:
            <span class="text-secondary truncate">
                ${prodotti.description}
                </span>
                </p>
            <p class="card-text"> Prezzo:
            <span class="text-secondary d-block">
            ${prodotti.price} €
            </span>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="">
              <a class="btn btn-primary"  role="button" href="details.html?id=${prodotti._id}"><i class="fa-solid fa-circle-info mx-2" style="color: #ffffff;"></i>Scopri di più</a>
              <a class="btn btn-warning " role="button" href="back.html?id=${prodotti._id}"><i
              class="fa-solid fa-arrow-right-arrow-left mx-2"
              style="color: #000000;"
            ></i
            >Modifica</a>
             </div>
            </div>
          </div>
        </div>
      </div>
        `;
        productList.innerHTML = card;
        console.log(prodotti);
        // select per scelta veloce INFO prodotti
        var productDropdown = document.getElementById("productDropdown");
        var option = document.createElement("option");
        option.value = prodotti._id;
        option.text = prodotti.name;
        productDropdown.appendChild(option);

        document.getElementById("productDropdown").style.display = "block";
        // select che porta al prodotto selezionato
        var cards = document.getElementsByClassName("card");
        for (var i = 0; i < cards.length; i++) {
          cards[i].setAttribute("id", data[i]._id);
        }
        var mySelect = document.getElementById("productDropdown");

        mySelect.addEventListener("change", function () {
          var selectedValue = mySelect.value;
          scrollToElement(selectedValue);
        });

        function scrollToElement(id) {
          var element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
      spinner.style.display = "none";

      // Numero dei prodotti caricati
      const numeroOggetti = data.length;
      const conteggioProdotti = document.getElementById("conteggio");
      conteggioProdotti.innerText = `Prodotti caricati: ${numeroOggetti}`;

      // MEME alert x Lidia
      let successAlert = document.getElementById("successAlert");
      successAlert.textContent = "NON SI E' ROTTO NULLA 😛!";
      successAlert.style.display = "block";
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 5000);
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero degli oggetti:",
        error
      );
      // MEME alert x Lidia
      let errorAlert = document.getElementById("errorAlert");
      errorAlert.textContent = "E' TUTTO ROTTO!!🤬: " + error.message;
      errorAlert.style.display = "block";
    });
};
