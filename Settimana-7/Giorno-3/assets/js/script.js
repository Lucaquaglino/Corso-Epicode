window.onload = () => {
    const bookList = document.querySelector("#book-list");
    const cartList = document.querySelector("#cart-list");
    const clearBtn = document.querySelector(".btn-danger");
  
    fetch("https://striveschool-api.herokuapp.com/books")
      .then((response) => response.json())
      .then((books) => {
        books.forEach((book) => {
          const card = document.createElement("div");
          card.classList.add("col-md-4", "mb-4", "col-lg-3");
          card.innerHTML = `
            <div class="card  h-100">
              <img src="${book.img}" class="card-img-top  h-50" alt="${book.title}">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">$${book.price}</p>
                </div>
                <div>
                  <button class="btn btn-danger w-100 mb-2 remove-btn">Scarta</button>
                  <button class="btn btn-primary w-100 add-btn">Compra ora</button>
                </div>
              </div>
            </div>
          `;
          bookList.appendChild(card);
  
      
          const removeBtns = card.querySelectorAll(".remove-btn");
          removeBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              const card = btn.closest(".col-md-4");
              card.remove();
            });
          });
  
          const addBtns = card.querySelectorAll(".add-btn");
          addBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
              const card = btn.closest(".col-md-4");
              const title = card.querySelector(".card-title").textContent;
              const price = card.querySelector(".card-text").textContent;
              const item = document.createElement("li");
              item.classList.add(
                "list-group-item",
                "d-flex",
                "justify-content-between",
                "align-items-center"
              );
              item.innerHTML = `
                ${title} <span class="badge bg-primary rounded-pill ms-auto">1</span>
                <span class="badge bg-secondary rounded-pill">${price}</span>
              `;
              cartList.appendChild(item);
            });
          });
        });
      })
      .catch((error) => console.error(error));
  
    clearBtn.addEventListener("click", () => {
      const cartItems = cartList.querySelectorAll(".list-group-item");
      cartItems.forEach((item) => item.remove());
    });
  };