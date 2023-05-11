const imgList = document.querySelector("#imgList");
fetch("https://api.pexels.com/v1/search?query=sardegna", {
  headers: {
    Authorization: "Hq3lIvNT42kTLMDHFySRCvfa1GxeiAUZJjROVmbK3bOy7qWv2jYoojL0 ",
  },
})
  .then((response) => response.json())
   .then((data) => {
    console.log(data)
    const photos = data.photos;
    console.log(photos)
    let card = "";
    // for (let i = 0; i < photos.length; i++) {      
    //     const photo = photos[i];
   
    // for (const photo of photos) {


        photos.forEach(photo => {
            
        
        card+= `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm h-100 ">
        <img src="${photo.src.large}" alt="" srcset="">
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `
        console.log(photo)
    // };
// };
});
    imgList.innerHTML = card;
    
  })
  .catch((error) => console.error(error));
 
//   .then((response) => response.json())
//   .then((data) => {
//     const photos = data.photos;
//     console.log(photos)
//     const card = photos
//       .map(
//         (photo) => `
//         <div class="col-md-4">
//         <div class="card mb-4 shadow-sm h-100 ">
//         <img src="${photo.src.medium}" alt="" srcset="">
//           <div class="card-body">
//             <h5 class="card-title">Lorem Ipsum</h5>
//             <p class="card-text">
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </p>
//             <div class="d-flex justify-content-between align-items-center">
//               <div class="btn-group">
//                 <button type="button" class="btn btn-sm btn-outline-secondary">
//                   View
//                 </button>
//                 <button type="button" class="btn btn-sm btn-outline-secondary">
//                   Edit
//                 </button>
//               </div>
//               <small class="text-muted">9 mins</small>
//             </div>
//           </div>
//         </div>
//       </div>
//         `
//       )
//       .join("");

//     imgList.innerHTML = card;
//   });