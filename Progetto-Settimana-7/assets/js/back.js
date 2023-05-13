

// bottone reset per svuotare i campi del form quando sono in modifica
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function(event) {
  event.preventDefault();
  var conferma = confirm("Sei sicuro di resettare il form?");

  if (conferma) {
  document.getElementById("myForm").reset();
  }
});


// tolgo bottone modifica e cancella in back quando devo aggiugnere un elemento
document.getElementById("modifica").style.display = "none";
document.getElementById("deleteButton").style.display = "none";

// prendo l id del prodotto tramite il tasto modifica in homepage.html
const parametri = new URLSearchParams(location.search);
const objectId = parametri.get('id');



// if else sul form per fare una modifica( PUT ), una aggiunta ( POST ) di un prodotto, una cancellazione(DELETE) di un prodotto e per popolare (GET) e svuotare il form 


if (objectId) {
  console.log(objectId)
    // nascondo / mostro i bottoni
    document.getElementById("modifica").style.display = "block";
    document.getElementById("invia").style.display = "none";
    document.getElementById("deleteButton").style.display = "block";

    // cancello oggetto già esistente con una richiesta DELETE  

    const deleteButton = document.getElementById("deleteButton");
   
    
    deleteButton.addEventListener("click", function(event) {
      event.preventDefault();
      
      //confermo di voler eliminare il prodotto

      var conferma = confirm("Sei sicuro di voler cancellare?");

      if (conferma) {
        
     
        fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
          method: 'DELETE',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODM4ODM2NzMsImV4cCI6MTY4NTA5MzI3M30.WmQUGhxMHwybBN2jxdnyYNrZfC9sV3EJgt3FHYtvQqY",
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          if (response.ok) {
            window.location.href = "homepage.html";
            console.log('Prodotto eliminato con successo');
           
          } else {
            console.error('Si è verificato un errore durante l\'eliminazione del prodotto');
          }
        })
        .catch(error => {
          console.error('Si è verificato un errore durante l\'eliminazione del prodotto:', error);
        });
        
    } 
    
    });
 
 // popolo form con i valori dell'oggetto selezionato con una richiesta GET prima di andarlo a modificare 

    const form = document.getElementById("myForm") 
  
  
    
    fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
        method: 'GET',
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODM4ODM2NzMsImV4cCI6MTY4NTA5MzI3M30.WmQUGhxMHwybBN2jxdnyYNrZfC9sV3EJgt3FHYtvQqY",
      
        'Content-Type': 'application/json',
      
      },
      })
        .then(response => response.json())
  .then(data => {
 
    form.name.value = data.name;
    form.description.value = data.description;
    form.brand.value = data.brand;
    form.imageUrl.value = data.imageUrl;
    form.price.value = data.price;
  })
  .catch(error => {
    console.error('Si è verificato un errore durante il recupero dei dati del prodotto:', error);
  });



// modifico oggetto già esistente con una richiesta PUT  
   document.getElementById("modifica").addEventListener("click", function(event) {
    event.preventDefault(); 

    //validazione riempimento campi del form
    var inputs = document.querySelectorAll("#myForm input, #myForm textarea, #myForm select");
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
      
    //confermo fi voler modificare il prodotto

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
      price: price
    }
  fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
    method: 'PUT',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODM4ODM2NzMsImV4cCI6MTY4NTA5MzI3M30.WmQUGhxMHwybBN2jxdnyYNrZfC9sV3EJgt3FHYtvQqY",
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(products),
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "homepage.html";
      console.log('Prodotto modificato con successo');
     
    } else {
      console.error('Si è verificato un errore durante la modifica del prodotto');
    }
  })
  .catch(error => {
    console.error('Si è verificato un errore durante la modifica del valore:', error);
  
  });
}
      };
})
} else {

// creo oggetto e lo carico sull API con una richiesta POST

    document.getElementById("invia").addEventListener("click", function(event) {
        event.preventDefault(); 

         //validazione riempimento campi del form
        var inputs = document.querySelectorAll("#myForm input, #myForm textarea, #myForm select");
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
          price: price
        }
      
      fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: 'POST',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDY5OTg4Zjc0MDAwMTQyODc0OTAiLCJpYXQiOjE2ODM4ODM2NzMsImV4cCI6MTY4NTA5MzI3M30.WmQUGhxMHwybBN2jxdnyYNrZfC9sV3EJgt3FHYtvQqY",
    
          'Content-Type': 'application/json',
       
        },
        body: JSON.stringify(products) 
      })
      .then(function(response) {
        if (response.ok) {
            
        
          window.location.href = "homepage.html";
        } else {
          
          console.error("Errore durante la richiesta POST:", response.status);
        }
      })
        .catch(error => {
          console.error('Si è verificato un errore durante il caricamento del prodotto:', error);
       
        });
      }
    }); 




   }






