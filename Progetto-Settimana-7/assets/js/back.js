// CHIAVE AUTHORIZATION
let chiave =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODQwNTYyODQsImV4cCI6MTY4NTI2NTg4NH0.WqjgtYzMONCax5PTs_9Jru1hNo5G7Zj7pTtgCrNW7iA";

// tolgo bottone modifica e cancella in back quando devo aggiugnere un elemento
document.getElementById("modifica").style.display = "none";
document.getElementById("deleteButton").style.display = "none";

// tolgo gli alert di modifica e cancellazione per i pop up modali
document.getElementById("modal-title-mod").style.display = "none";
document.getElementById("mod-modal").style.display = "none";
document.getElementById("modal-title-mod-error").style.display = "none";
document.getElementById("mod-modal-error").style.display = "none";
document.getElementById("modal-title-del").style.display = "none";
document.getElementById("del-modal").style.display = "none";
document.getElementById("modal-title-del-error").style.display = "none";
document.getElementById("del-modal-error").style.display = "none";

// bottone reset per svuotare i campi del form quando sono in modifica
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function (event) {
  event.preventDefault();
  var conferma = confirm("Sei sicuro di resettare il form?");

  if (conferma) {
    document.getElementById("myForm").reset();
  }
});

// prendo l id del prodotto tramite il tasto modifica in homepage.html
const parametri = new URLSearchParams(location.search);
const objectId = parametri.get("id");

// if else sul form per fare una modifica( PUT ), una aggiunta ( POST ) di un prodotto, una cancellazione(DELETE) di un prodotto e per popolare (GET) e svuotare il form

if (objectId) {
  console.log(objectId);
  // nascondo / mostro i bottoni
  document.getElementById("modifica").style.display = "block";
  document.getElementById("invia").style.display = "none";
  document.getElementById("deleteButton").style.display = "block";

  // cancello oggetto già esistente con una richiesta DELETE

  const deleteButton = document.getElementById("deleteButton");

  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();

    //confermo di voler eliminare il prodotto

    var conferma = confirm("Sei sicuro di voler cancellare?");

    if (conferma) {
      fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
        method: "DELETE",
        headers: {
          Authorization: chiave,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            // pop-up modali
            document.getElementById("modal-title-add").style.display = "none";
            document.getElementById("add-modal").style.display = "none";
            document.getElementById("modal-title-del").style.display = "block";
            document.getElementById("del-modal").style.display = "block";
            $("#modalOk").modal("show");
            setTimeout(function () {
              window.location.href = "homepage.html";
            }, 2000);
            console.log("Prodotto eliminato con successo");
          }
           else
            {
              // pop-up modali
            document.getElementById("modal-title-add-error").style.display =
              "none";
            document.getElementById("add-modal-error").style.display = "none";
            document.getElementById("modal-title-del-error").style.display =
              "block";
            document.getElementById("del-modal-error").style.display = "block";
            $("#modalError").modal("show");
            console.error(
              "Si è verificato un errore durante l'eliminazione del prodotto"
            );
          }
        })
        .catch((error) => {
          // pop-up modali
          document.getElementById("modal-title-add-error").style.display =
            "none";
          document.getElementById("add-modal-error").style.display = "none";
          document.getElementById("modal-title-del-error").style.display =
            "block";
          document.getElementById("del-modal-error").style.display = "block";
          $("#modalError").modal("show");
          console.error(
            "Si è verificato un errore durante l'eliminazione del prodotto:",
            error
          );
        });
    }
  });

  // popolo form con i valori dell'oggetto selezionato con una richiesta GET prima di andarlo a modificare

  const form = document.getElementById("myForm");

  fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
    method: "GET",
    headers: {
      Authorization: chiave,

      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      form.name.value = data.name;
      form.description.value = data.description;
      form.brand.value = data.brand;
      form.imageUrl.value = data.imageUrl;
      form.price.value = data.price;
    })
    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei dati del prodotto:",
        error
      );
    });

  // modifico oggetto già esistente con una richiesta PUT

  //click sul pulsante modifica
  document
    .getElementById("modifica")
    .addEventListener("click", function (event) {
      event.preventDefault();

      //validazione riempimento campi del form con alert se i campi non sono pieni
      var inputs = document.querySelectorAll(
        "#myForm input, #myForm textarea, #myForm select"
      );
      var isFormValid = true;

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (!input.value) {
          isFormValid = false;
          break;
        }
      }

      if (!isFormValid) {
        alert("Completa tutti i campi del modulo!");
      } else {
        //confermo di voler modificare il prodotto

        var conferma = confirm("Sei sicuro di voler modificare il prodotto?");

        if (conferma) {
          const name = document.getElementById("name").value;
          const description = document.getElementById("description").value;
          const brand = document.getElementById("brand").value;
          const imageUrl = document.getElementById("imageUrl").value;
          const price = document.getElementById("price").value;

          const products = {
            name: name,
            description: description,
            brand: brand,
            imageUrl: imageUrl,
            price: price,
          };
          fetch(
            `https://striveschool-api.herokuapp.com/api/product/${objectId}`,
            {
              method: "PUT",
              headers: {
                Authorization: chiave,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(products),
            }
          )
            .then((response) => {
              if (response.ok) {
                // pop-up modali
                document.getElementById("mod-modal").style.display = "block";
                document.getElementById("modal-title-mod").style.display =
                  "block";
                document.getElementById("modal-title-add").style.display =
                  "none";
                document.getElementById("add-modal").style.display = "none";
                $("#modalOk").modal("show");
                setTimeout(function () {
                  window.location.href = "homepage.html";
                }, 2000);
                console.log("Prodotto modificato con successo");
                console.log(price);
              } else {
                console.error(
                  "Si è verificato un errore durante la modifica del prodotto"
                );
                // pop-up modali
                document.getElementById("mod-modal-error").style.display =
                  "block";
                document.getElementById("modal-title-mod-error").style.display =
                  "block";
                document.getElementById("modal-title-add-error").style.display =
                  "none";
                document.getElementById("add-modal-error").style.display =
                  "none";
                $("#modalError").modal("show");
              }
            })
            .catch((error) => {
              console.error(
                "Si è verificato un errore durante la modifica del valore:",
                error
              );
              // pop-up modali
              document.getElementById("mod-modal").style.display = "block";
              document.getElementById("modal-title-mod").style.display =
                "block";
              document.getElementById("modal-title-add-error").style.display =
                "none";
              document.getElementById("add-modal-error").style.display = "none";
              $("#modalError").modal("show");
            });
        }
      }
    });
} else {


  // creo oggetto e lo carico sull API con una richiesta POST

  document.getElementById("invia").addEventListener("click", function (event) {
    event.preventDefault();

    //validazione riempimento campi del form
    var inputs = document.querySelectorAll(
      "#myForm input, #myForm textarea, #myForm select"
    );
    var isFormValid = true;

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (!input.value) {
        isFormValid = false;
        break;
      }
    }

    if (!isFormValid) {
      alert("Completa tutti i campi del modulo!");
    }
     else
      {
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      const brand = document.getElementById("brand").value;
      const imageUrl = document.getElementById("imageUrl").value;
      const price = document.getElementById("price").value;

      const products = {
        name: name,
        description: description,
        brand: brand,
        imageUrl: imageUrl,
        price: price,
      };

      fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
          Authorization: chiave,

          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      })
        .then(function (response) {
          if (response.ok) {
            // pop-up modali
            $("#modalOk").modal("show");
            setTimeout(function () {
              $("#modalOk").modal("hide");
            }, 2000);
          } else {
            console.error("Errore durante la richiesta POST:", response.status);
            // pop-up modali
            $("#modalError").modal("show");
          }
        })
        .catch((error) => {
          console.error(
            "Si è verificato un errore durante il caricamento del prodotto:",
            error
          );
          // pop-up modali
          $("#modalError").modal("show");
        });
    }
  });
}
