const parametri = new URLSearchParams(location.search);
const objectId = parametri.get('id');
console.log(objectId)






if (objectId) {
  
  
    
    fetch(`https://striveschool-api.herokuapp.com/api/product/${objectId}`, {
        method: 'GET',
        headers: {
          "Authorization": "Bearer eyJhbGciFHYtvQqY",
      
        'Content-Type': 'application/json',
      
      },
      })
        .then(response => response.json())
    .then(data => {
        console.log('Oggetti ottenuti con successo:', data);
       
        
            const card = `
            <div class="col-12">
            <div class="card mb-4 shadow-sm h-50 row">
            <div class="col-4">
            <img src="${data.imageUrl}" alt="" srcset="" class="w-100">
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">
                ${data.brand}
                </p>
                <p class="card-text">
                ${data._id}
                </p>
                <p class="card-text">
                ${data.description}
                </p>
                <p class="card-text">
                ${data.price} €
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">   
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `
            
    
    
        productList.innerHTML = card;
        
          })
    
    
    .catch(error => {
    console.error('Si è verificato un errore durante il recupero dei dati del prodotto:', error);
    });
    
    }