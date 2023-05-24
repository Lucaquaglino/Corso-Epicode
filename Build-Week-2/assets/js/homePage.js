


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
   let playButtons = document.querySelectorAll('.cardArtist .play-btn');
   playButtons.forEach((button, i )=> {
     button.addEventListener('click', () => {
       const musicLink = button.dataset.musicLink;
       playMusic(musicLink, i);
      });
    });

  playButtons = document.querySelectorAll('.btn-album');
   playButtons.forEach((button, i )=> {
     button.addEventListener('click', () => {
       const musicLink = button.dataset.musicLink;
       playMusic(musicLink, i);
      });
  });
// funzione per far partire la musica
       function playMusic(musicLink, i) {
          const musicPlayer = document.getElementById('music-player');
          musicPlayer.src = musicLink;
        //  musicPlayer.load();
        //  musicPlayer.play();
        if(player){
          player.stop();
        }
        player = new Sound([musicLink], 100, false, () => {
          updateMsg(array[i]);
          updateArtistData(array[i]);
        });
        player.start();
        updatePlayButton();
        }
          

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

var player;

function Sound(source, volume, loop, indexCallback)
{
  this.source = source;
  this.volume = volume;
  this.loop = loop;
  var son;
  this.son = son;
  this.finish = false;
  var src;
  this.src = src;
  var index = 0;
  this.index = index;
  var progress;
  var timer;
  this.isPlay = false;
  this.callback = indexCallback;

  this.initialized = function(){
      return this.son != undefined;
  }

  this.flipLoop = function(value){
      this.loop = value;
  }

 this.playFrom = function(i, _src){
      this.index = i;
      this.start();
      this.son.pause();
      this.src.setAttribute('src', _src);
      
      this.son.load();
      this.son.play();
      this.isPlay = true;
      updatePlayButton();
 }

  this.restart = function(){
      this.son.play();
      this.isPlay = true;
  }

  this.pause = function(){
      this.son.pause();
      this.isPlay = false;
  }

  this.stop = function()
  {
     // document.body.removeChild(this.son);
     this.son.pause();
     this.son.currentTime = 0;
     this.isPlay = false;
  }
  this.start = function()
  {
      if (this.finish) return false;
    //  this.son = document.createElement("audio");
    this.son = document.getElementById('music-player');
     // this.son.setAttribute("src", this.source);
     // this.son.setAttribute("hidden", "true");
      this.son.setAttribute("volume", this.volume);
      this.son.setAttribute("autoplay", "false");
   //   this.son.setAttribute("loop", this.loop);

      this.son.addEventListener('loadedmetadata', () => {
          document.getElementById('time').innerText = this.formatTime(this.son.duration);
      });

          if(!this.src){
              let source = document.createElement('source');
              this.src = source;
          }
          this.src.setAttribute('src', this.source[index]);
          this.src.setAttribute('type', 'audio/mpeg');
          this.son.appendChild(this.src);

          this.son.addEventListener('ended', () =>{
              this.next();
          });
              
         
          
      
      document.body.appendChild(this.son);

      this.son.addEventListener('loadeddata', () => {
          let interval = 1000 * this.son.duration / 100;
          this.progress = setInterval(() => {
              this.updateProgress(this.son.currentTime);
          }, interval);

          this.timer = setInterval(() => {
              let time = this.son.currentTime;
              let element = document.getElementById('currentTime');
              
              element.innerText = this.formatTime(time);
            //  this.updateProgress(time);
          }, 1000);
      });
      
      this.son.play();
      this.isPlay = true;
      this.updateIndex(this.callback);
  }

  this.updateProgress = function(tm){
      let bar = document.getElementById('audioBar');
      let value = Math.floor(tm / this.son.duration * 100);
      bar.setAttribute('aria-valuenow', value);
      bar.style = `width:${value}%`;
  }

  this.formatTime = function(tm){
     // tm = Math.floor(tm/1000);
      let min = Math.floor(tm/60);
      let minString = min < 10 ? '0' + min : min;
      let sec = Math.floor(tm%60);
      let secString = sec < 10 ? '0' + sec : sec;
      return `${minString}:${secString}`;
  }

  this.updateIndex = function(callback){
      this.callback(this.index);
  }

  this.back = function(){
      if(this.index == 0){
          return;
      }
      this.index--;
      this.src.setAttribute('src', this.source[this.index]);
      this.son.pause();
      this.son.load();
      this.son.play();
      this.isPlay = true;
      this.updateIndex(this.callback);
  }

  this.next = function(){
      if(this.index == source.length - 1){
          if(this.loop){
              this.index = -1;
          }else{
            removeMsg();
              return;
          }
      }
      this.index++;
      this.src.setAttribute('src', this.source[this.index]);
      this.son.pause();
      this.son.load();
      this.son.play();
      this.isPlay = true;
      this.updateIndex(this.callback);
  }

  

  this.remove = function()
  {
      document.body.removeChild(this.son);
      this.finish = true;
  }
  this.play = function(volume, loop)
  {
      this.finish = false;
      this.volume = volume;
      this.loop = loop;
  }
}

function removeMsg(){
document.getElementById('txt').innerHTML = '';
}

function setupAudioComponents(){

/* document.getElementById('play').onclick = () => {
    
    playAll();
   
};
*/

let buttonPlay = document.getElementById('controlPlay');
buttonPlay.onclick = () => {
  if(!player){
    return;
  }
    if(player.initialized()){
    player.isPlay ? player.pause() : player.restart();
  updatePlayButton();
    }
 
};

let buttonBack = document.getElementById('controlBack');
buttonBack.onclick = () => {
    if(player){
        playlist.back();
    }
};

let buttonForward = document.getElementById('controlForward');
buttonForward.onclick = () => {
    if(player){
        playlist.next();
    }
};

let buttonLoop = document.getElementById('controlLoop');
buttonLoop.onclick = () => {

    
    this.loop = !this.loop;
    if(player){
        playlist.flipLoop(this.loop);
        //playlist.son.setAttribute('loop', this.loop);
    }
    document.getElementById('controlLoop').classList.toggle('active');
};


let buttonShuffle = document.getElementById('controlShuffle');
buttonShuffle.onclick = () => {
    if(!player){
        return;
    }
   
    shuffle = !shuffle;
    document.getElementById('controlShuffle').classList.toggle('active');
};
}

window.onload = () => {
setupAudioComponents();
};

function updatePlayButton(){
let playIcon = document.getElementById('iconPlay');
let pauseIcon = document.getElementById('iconPause');

let playMobile = document.getElementById('iconPlay2');
  let pauseMobile = document.getElementById('iconPause2');

 if( player.isPlay){
      playIcon.style = 'display:none;';
      pauseIcon.style = 'display:block;';
    
      playMobile.style.display = 'none';
      pauseMobile.style.display = 'block';
 }else{
  pauseIcon.style = 'display:none;';
  playIcon.style = 'display:block;';
 
  playMobile.style.display = 'block';
      pauseMobile.style.display = 'none';
 }
}

function updateMsg(data){
msg(`artista: ${data.artist.name} - brano: ${data.title_short}`);
}

function text(msg,ctrlwidth) {
msg = " --- "+msg+'                 ';
newmsg = msg
while (newmsg.length < ctrlwidth) {
newmsg += msg
}
let html = '<FORM NAME="Scrolltext">\
    <CENTER><INPUT NAME="text" VALUE= "'+newmsg+'" SIZE= '+ctrlwidth+' ></CENTER>\
    </FORM>';
var bannerID = null
document.getElementById('txt').innerHTML = html;
rollmsg()
}

function rollmsg() {
let NowMsg;
NowMsg = document.Scrolltext.text.value;
NowMsg = NowMsg.substring(1,NowMsg.length)+NowMsg.substring(0,1);
document.Scrolltext.text.value = NowMsg;
let bannerID = setTimeout("rollmsg()",300)//change the number 100 to represent the speed of the scroll. The larger the number the slower it moves
}

function msg(msg){
    let ctrlwidth = "75"; //change this number to the length you would like the message box to be
    text(msg,ctrlwidth);
}

function updateArtistData(data){
    let img = document.getElementById('currentImg');
    let artist = document.getElementById('currentArtist');
    let brano = document.getElementById('currentTitle');
    img.src = data.album.cover_small;
    artist.innerText = data.artist.name;
    brano.innerText = data.title;

}

function actionPlay(){
  if(player.initialized()){
    player.isPlay ? player.pause() : player.restart();
    updatePlayButton();
      }
}



     



