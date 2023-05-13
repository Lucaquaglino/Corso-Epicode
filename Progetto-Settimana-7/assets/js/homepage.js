window.onload = () => {
let spinner = document.getElementById("spinner")
spinner.style.display="block";

fetch('https://striveschool-api.herokuapp.com/api/product/', {
  method: 'GET',
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODM4ODM2NzMsImV4cCI6MTY4NTA5MzI3M30.WmQUGhxMHwybBN2jxdnyYNrZfC9sV3EJgt3FHYtvQqY",

  'Content-Type': 'application/json',

},
})
  .then(response => response.json())
  // timer caricamento spinner
  .then(data=> {
    return new Promise(resolve=> setTimeout(resolve,2000,data));
  })
  .then(data => {
     console.log('Oggetti ottenuti con successo:', data);
    let card = ""
    data.forEach(prodotti => {
        card+= `
        <div class="col-md-4 mb-4">
        <div class="card mb-4 shadow-sm h-100 ">
        <img src="${prodotti.imageUrl}" alt="" srcset="">
          <div class="card-body">
            <h5 class="card-title">${prodotti.name}</h5>
            <p class="card-text">
            ${prodotti.brand}
            </p>
            <p class="card-text">
            ${prodotti._id}
            </p>
            <p class="card-text text-truncate">
            ${prodotti.description}
            </p>
            <p class="card-text">
            ${prodotti.price} €
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
              <a class="btn btn-primary"  role="button" href="details.html?id=${prodotti._id}">Scopri di più</a>
              <a class="btn btn-warning me-2 mb-1" href="back.html?id=${prodotti._id}">Modifica</a>
             </div>
            </div>
          </div>
        </div>
      </div>
        `
        console.log(prodotti)

});
    productList.innerHTML = card;
    spinner.style.display="none";

    var successAlert = document.getElementById("successAlert");
    successAlert.textContent = "NON SI E' ROTTO NULLA 😛!";
    successAlert.style.display = "block";
    setTimeout(() => {
        successAlert.style.display = "none";
      }, 5000);


      })
      
     .catch(error => {
    console.error('Si è verificato un errore durante il recupero degli oggetti:', error)

    var errorAlert = document.getElementById("errorAlert");
    errorAlert.textContent = "E' TUTTO ROTTO!!🤬: " + error.message;
    errorAlert.style.display = "block";


     });

    };





