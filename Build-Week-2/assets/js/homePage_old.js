


    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=love")
  .then(response => response.json())
  .then(data => {
    const array = data.data;
    const container = document.getElementById('album-container');
    const containerArtist = document.getElementById('artist-container');
    let cardArtist=""
    let card = "";

    for (let i = 0; i < array.length; i++) {
      const album = array[i].album;
      const albumTitle = album.title;
      const albumCover = album.cover_medium;
      const idAlbum= album.id;

     
  
    //   link musicali
      const musicLink = array[i].preview;
      const musicPlayer = document.getElementById('music-player');
        musicPlayer.src = musicLink;
        console.log(musicLink)
      
      



   // creo card a schermo degli album
      
card += `
<div class="col-6 col-md-4 col-lg-3 container-card cardsAlbum">
    <div class="card text-white m-4 cards-album p-3">
    
        <img src="${albumCover}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-truncate">${albumTitle}</h5>
          </div>
      </div>
      <button class="btn btn-primary play-btn btn-album shadow-none" data-music-link="${musicLink}"><i class="bi bi-play-fill "></i></button>
      </div>`
      
 container.innerHTML= card;


// Prendo id dell album per andare su album page

 const cardClick = document.querySelectorAll('.cards-album');
      cardClick.forEach((button, index) => {
        button.addEventListener('click', () => {
          const clickedAlbum = array[index].album;
          const clickedAlbumId = clickedAlbum.id;
          window.location.href = "albumPages.html?id=" + clickedAlbumId;
        })
      })




      // creo card a schermo degli artisti
      const artist = array[i].artist;
      const artistName = artist.name;
      const artistPicture = artist.picture_medium;
      cardArtist +=`<div class="container-card col-6 col-lg-4 mb-4 cardArtist">
      <div class="card m-2 text-white title-artist card-artist" >
  <div class="row g-0 d-flex align-items-center">
    <div class="col-4">
      <img src="${artistPicture}" class="img-fluid rounded-start" style="object-fit: contain;" alt="...">
    </div>
    <div class="card-body col-sm-8">
        <p class="card-title text-truncate">${artistName}</p>
    </div>
  </div>
</div>
<button class="btn btn-primary play-btn btn-artist round-button shadow-none" data-music-link="${musicLink}"><i class="bi bi-play-fill "></i></button>
</div>`


containerArtist.innerHTML=cardArtist;


// Prendo id dell album per andare su artist page

 const cardClickArtist = document.querySelectorAll('.title-artist');
      cardClickArtist.forEach((button, index) => {
        button.addEventListener('click', () => {
          const clickedArtist = array[index].artist;
          const clickedArtistId = clickedArtist.id;
          window.location.href = "artistPages.html?artist=" + clickedArtistId;
        })
      })


//   Collego il bottone al player musicale
     const playButtons = document.querySelectorAll('.play-btn');
     playButtons.forEach(button => {
       button.addEventListener('click', () => {
         const musicLink = button.dataset.musicLink;
         playMusic(musicLink);
        });
    });
// funzione per far partire la musica
         function playMusic(musicLink) {
            const musicPlayer = document.getElementById('music-player');
            musicPlayer.src = musicLink;
            musicPlayer.load();
            musicPlayer.play();}
            

// Seleziona l'input di ricerca e il pulsante
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

// Aggiungi un ascoltatore di eventi al pulsante di ricerca
searchButton.addEventListener('click', function() {
  // Ottieni il valore di input di ricerca
  var searchTerm = searchInput.value;
  window.location.href="searchResult.html?id="+searchTerm
})




      console.log(albumTitle, albumCover);

    }
    
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });
 





  // function handleAlbumClick(idAlbum) {
  //   const cardClick = document.querySelectorAll('.cards-album');
  //   cardClick.forEach(button => {
  //     button.addEventListener('click', () => {
  //       window.location.href = "albumPages.html?id=" + idAlbum;
  //     });
  //   });
  // }
 


//   array playlist finte
const playlistNames = [
    "Be The Young Seasons 1-5",
    "Be The Young Seasons 6-8",
    "persona di m*rda (gen-feb 2023)",
    "Musical 2022",
    "pippo, pluto e paperino (nov-dec 2022)",
    "early stage emily syndrome (sett-ott 2022)",
    "Be the young",
    "'...' cit. Kimiko (lug-ago 2022)",
    "saggio vibes 💃🩰",
    "main character energy (mag-giu 2022)",
    "that fucking mood 🔪☠️",
    "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of mood 🔪🖕",
    "landing page (mar-apr 2022)",
    "2021 lol",
    "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
    "honey and glass (nov-dic 2021)",
    "(Revenge) Training Arc 🦍",
    "Lidia 🤝 Emily",
    "minecraft e nintendo switch (sep-oct 2021)",
    "silvano d'orba? I hardly know her (lug - ago 2021)",
    "Culo 2021",
    "Frah Quintale Mix",
    "Francesco Guccini Mix",
    "Lo Stato Sociale Mix",
    "chapter 4/? (mag-giu 2021)",
    "Strive School <> The Hunt Motivation",
    "mi stavo dimenticando (mar-apr 2021)",
    "high school musical 1,2,3",
    "quanto trash cazzo",
    "The 2020 Playlist",
    "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
  ];


for (let i = 0; i < playlistNames.length; i++) {
  const element = playlistNames[i];
  console.log(element)


  const playlistItem = document.createElement("p");
  playlistItem.classList.add("playlist");
  playlistItem.textContent = element;
const playlistContainer=document.getElementById("playlist")
playlistContainer.appendChild(playlistItem);
 
}



  
       



