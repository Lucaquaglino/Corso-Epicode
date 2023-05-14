// CHIAVE AUTHORIZATION
let chiave =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODQwNTYyODQsImV4cCI6MTY4NTI2NTg4NH0.WqjgtYzMONCax5PTs_9Jru1hNo5G7Zj7pTtgCrNW7iA";

// verifica ID
const parametri = new URLSearchParams(location.search);
const objectId = parametri.get("id");
console.log(objectId);

if (objectId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
    method: "GET",
    headers: {
      Authorization: chiave,

      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((prodotti) => {
      console.log("Oggetti ottenuti con successo:", prodotti);

      const card = `
            <div class="col-12">
            <div class="card mb-4 row">
            <div class="col-4">
            <img src="${prodotti.imageUrl}" alt="" srcset="" class="my-3 immaginiCard">
            </div>
            <div class="col-8">
              <div class="card-body">
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
              <span class="text-secondary  d-block">
                  ${prodotti.description}
                  </span>
                  </p>
              <p class="card-text"> Prezzo:
              <span class="text-secondary d-block">
              ${prodotti.price} €
              </span>
              </p>
                 </div>
              </div>
            </div>
          </div>
            `;

      productList.innerHTML = card;
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei dati del prodotto:",
        error
      );
    });
}
