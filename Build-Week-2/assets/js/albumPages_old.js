
// - - - - - - - - - - - - - - - definizione variabile in base ad album selezionato
const selectedAlbumId = new URLSearchParams(window.location.search).get("id");
console.log('id album selezionato:',selectedAlbumId);

// - - - - - - - - - - - - - - - GET fetch al window.onload
window.onload = async () => {
    try {
        const promise = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${selectedAlbumId}`, {
        //const promise = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/'+selectedAlbumId, {
            //method:'',
            //body:,
            //*headers: {Authorization: ''}
            })
            if (promise.ok) {
                const selectedAlbum = await promise.json();
                console.log('album selezionato:',selectedAlbum);


                // - - - - - - - - - - - - - - - destrutturazione prodotto selezionato (selectedAlbum)
                const { id, title, cover, contributors, release_date, nb_tracks, duration, tracks } = selectedAlbum


                // - - - - - - - - - - - - - - - funzione trasforma album duration da secondi a formato hh:mm:ss
                function albumDurationFunction(_albumDuration) {
                    var //millisecondi = parseInt((_duration%1000)/100)
                        secondi = parseInt(_albumDuration%60)
                        , minuti = parseInt((_albumDuration/60)%60)
                        , ore = parseInt((_albumDuration/(60*60))%24);

                    ore = (ore < 10) ? "0" + ore : ore;
                    minuti = (minuti < 10) ? "0" + minuti : minuti;
                    secondi = (secondi < 10) ? "0" + secondi : secondi;
                
                    //return ore + ":" + minuti + ":" + secondi + "." + millisecondi;
                    return ore + ":" + minuti + ":" + secondi;
                }
                var albumDurationNew = albumDurationFunction(duration);
                


                // - - - - - - - - - - - - - - - manipolazione DOM per info album
                const albumCover = document.getElementById('albumCover');
                albumCover.innerHTML = `<img src="${cover}" class="img-fluid w-100 ms-3" alt="..." id="albumImg"></div>`;

                const albumTitle = document.getElementById('albumTitle');
                albumTitle.innerHTML = `<h1 class="d-none d-lg-block" id="albumTitle2">${title}</h1>
                <h1 class="d-block d-lg-none">${title}</h1>`;

                const artistPicture = document.getElementById('artistPicture');
                artistPicture.innerHTML = `<img src="${contributors[0].picture_small}" class="img-fluid rounded-circle me-1" alt="..." width="24"><a href="artistPages.html?artist=${contributors[0].id}">${contributors[0].name}</a> - <span>${release_date.substr(0, 4)}</span> - <span> ${nb_tracks} brani</span>, <span>${albumDurationNew}</span>`;

                            

                // - - - - - - - - - - - - - - - manipolazione DOM per inserimento brani
                const songsContainer = document.getElementById('songsContainer');

                let tracksArray = tracks.data;
                console.log(tracksArray);
                for (i = 0; i < tracksArray.length; i++) {
                    let songTitle = tracksArray[i].title;
                    let songRank = tracksArray[i].rank;
                    let songDuration = tracksArray[i].duration;
                    console.log(songTitle);
                    console.log(songDuration);
                
                    // - - - - - - - - - - - - - - - funzione trasforma song duration da secondi a formato hh:mm:ss
                    function songDurationFunction(_songDuration) {
                        var //millisecondi = parseInt((_duration%1000)/100)
                            secondi = parseInt(_songDuration%60)
                            , minuti = parseInt((_songDuration/60)%60)
                            //, ore = parseInt((_songDuration/(60*60))%24);

                        //ore = (ore < 10) ? "0" + ore : ore;
                        minuti = (minuti < 10) ? "0" + minuti : minuti;
                        secondi = (secondi < 10) ? "0" + secondi : secondi;
                    
                        //return ore + ":" + minuti + ":" + secondi + "." + millisecondi;
                        return minuti + ":" + secondi;
                    }
                    var songDurationNew = songDurationFunction(songDuration);


                    songsContainer.innerHTML += `
                    <div class="col-12 mb-2">
                        <div class="row">
                        <div class="col-1 text-center">${i+1}</div>
                        <div class="col-5">${songTitle}<br><span>${contributors[0].name}</span></div>
                        <div class="col-4">${songRank}</div><div class="col-2">${songDurationNew}</div>
                        </div>
                    </div>
                    `                  
                }
            }
            
            else {
                throw new Error("Richiesta non a buon fine")
            }
    }
    catch (error) {
        alert(error)
    }
}


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