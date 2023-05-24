const artistUrl = 'https://striveschool-api.herokuapp.com/api/deezer/artist/';
var progProcess;

var dataPlaylist;
var audio;
var play = false;
var shuffle = false;
var loop = false;

window.onload = () => {

    let artist = new URLSearchParams(location.search).get('artist');

   fetchArtist(artist);


    document.getElementById('play').onclick = () => {
        
        playAll();
       
    };

    audio = document.getElementById('music-player');

    let buttonPlay = document.getElementById('controlPlay');
    buttonPlay.onclick = () => {
        if(playlist.initialized()){
        playlist.isPlay ? playlist.pause() : playlist.restart();
      updatePlayButton();
        }
     
    };

    let buttonBack = document.getElementById('controlBack');
    buttonBack.onclick = () => {
        if(playlist){
            playlist.back();
        }
    };

    let buttonForward = document.getElementById('controlForward');
    buttonForward.onclick = () => {
        if(playlist){
            playlist.next();
        }
    };

    let buttonLoop = document.getElementById('controlLoop');
    buttonLoop.onclick = () => {

        
        this.loop = !this.loop;
        if(playlist){
            playlist.flipLoop(this.loop);
            //playlist.son.setAttribute('loop', this.loop);
        }
        document.getElementById('loopIcon').classList.toggle('active');
    };


    let buttonShuffle = document.getElementById('controlShuffle');
    buttonShuffle.onclick = () => {
        if(!playlist){
            return;
        }
        if(shuffle){
            playlist.source = dataPlaylist.map(element => element.preview);
        }else{
            let indexes = [];
            while(indexes.length < dataPlaylist.length){
                indexes.push(Math.floor(Math.random() * dataPlaylist.length));
            }
            let el = dataPlaylist.map(element => element.preview);
            playlist.source = dataPlaylist.map(element => element.preview).sort((a,b) => indexes[el.indexOf(a)] < indexes[el.indexOf(b)] ? -1 : 1);
        }
        shuffle = !shuffle;
        document.getElementById('shuffleIcon').classList.toggle('active');
    };
};

function showData(data){
    document.getElementById('nome').innerHTML = '<strong>'+data.name+'</strong>';
    document.getElementById('subtitle').innerText = `${data.nb_fan} ascoltatori mensili.`;
    let hero = document.getElementById('hero');
    hero.style.background = `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7)), url('${data.picture_big}')`;
    hero.style.backgroundSize = 'cover';
    hero.style.height = '400px';

}

function fetchArtist(artist){

    fetch(`${artistUrl}${artist}`)
    .then(response => response.json())
    .then(data => {

        showData(data);
        fetchSongs(data);
    })
    .catch(error => {
        console.error(error);
    });

}

function fetchSongs(artist){
// startProgress();
fetch(`${artist.tracklist}`)
.then(response => response.json())
.then(({data}) => {
    data.sort((e1,e2) => e1.rank > e2.rank ? -1 : 1);
    data.forEach((element, index) =>{ 
        console.table(element);
        let domEl = domElement(element, index +1);
        document.querySelector('#playlist-1').appendChild(domEl);
      
});
dataPlaylist = data;
initPlaylist();
  //  ultimateProgress();
})
.catch(error => {
    showMessage('Errore recupero dati artista.');
    console.error(error);
});
}

function showMessage(message){

}

function startProgress(){
    progProcess = setInterval(incrementProgress, 50);
    
}

function ultimateProgress(){
    clearInterval(this.progProcess);
    progProcess = setInterval(incrementProgress, 5);
}

function incrementProgress(){
    let progress = document.getElementsByClassName('progress-bar')[0];
    let prog = 0;//Number(progress.getAttribute('aria-valuenow'));
    
    if(prog < 100){
        prog++;
        progress.setAttribute('aria-valuenow', String(prog));
        progress.style = `width:${prog}%`;
    }else{
        setTimeout(()=>document.getElementsByClassName('progress')[0].style = 'display:none', 800);
        clearInterval(this.progProcess);
    }
}


function domElement(artistData, index){
    let col = document.createElement('div');
    col.classList = 'col-12 my-2 album';

    let card = document.createElement('div');
    card.classList = 'd-flex flex-row align-items-center';
    col.appendChild(card);

    let num = document.createElement('h4');
    num.innerText = index;
    num.classList = 'w-15 mx-4';
    card.appendChild(num);

    let img = document.createElement('img');
    img.classList = 'img-fluid';
    card.appendChild(img);
    img.src = artistData.album.cover;

    let card2 = document.createElement('div');
    card2.classList = 'd-flex flex-row align-items-center justify-content-between w-100';
  

    let title = document.createElement('h4');
    title.classList = 'title mx-4';
    title.innerText = artistData.title_short;
    card2.appendChild(title);

    card.appendChild(card2);

    let rank = document.createElement('h6');
    rank.classList = 'mx-3';
    rank.innerText = artistData.rank;
    card2.appendChild(rank);

    let durat = document.createElement('h4');
    durat.classList = 'mx-3';
    let sec = artistData.duration%60;
    sec = sec < 10 ? '0' + sec : `${sec}`;
    durat.innerText = `${Math.floor(artistData.duration/60)}:${sec}`;
    card.appendChild(durat);


    col.onclick = () => {
        let list = document.getElementsByClassName('album');//.forEach(el => el.classList.remove('selected'));
        for(let i = 0; i < list.length; i++){
            list.item(i).classList.remove('selected');
        }
        col.classList.add('selected');
        playing = true;
        if(!playlist){
            
            playlist = new Sound(dataPlaylist.map(element => element.preview),100, this.loop);
           // playlist.index = index;
           // playlist.start();
        }
            playlist.playFrom(index -1, artistData.preview);
        
    };

 

    return col;
}

var selected;
var foo;



function Sound(source, volume, loop)
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
    }

    this.next = function(){
        if(this.index == source.length - 1){
            if(this.loop){
                this.index = -1;
            }else{
                return;
            }
        }
        this.index++;
        this.src.setAttribute('src', this.source[this.index]);
        this.son.pause();
        this.son.load();
        this.son.play();
        this.isPlay = true;
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

var tracks = [];
var playIndex = 0;

//var playing = false;
var playlist;

function stopPlaylist(){
    document.getElementById('play').innerText = 'Play';
    if(playlist){
        playlist.stop();
        playlist = undefined;
    }
}

function initPlaylist(){
    playlist = new Sound(dataPlaylist.map(element => element.preview),100, this.loop);
}

function playAll(){
    if(foo){
        foo.stop();
        }
  
    if(playlist && playlist.initialized()){
        playlist.isPlay ? playlist.pause() : playlist.restart();
       // playing = !playing;
     
    }else{
   // playing = true;
    
    
    playlist.start();
    }
    //document.getElementById('play').innerText = playlist.isPlay ? 'Pausa': 'Play';
   updatePlayButton();
}

function updatePlayButton(){
    let playIcon = document.getElementById('iconPlay');
    let pauseIcon = document.getElementById('iconPause');
    let buttonImage = document.querySelector('#play img');
   if( playlist.isPlay){
        playIcon.style = 'display:none;';
        pauseIcon.style = 'display:block;';
        buttonImage.src = 'assets/imgs/pause.svg'
   }else{
    pauseIcon.style = 'display:none;';
    playIcon.style = 'display:block;';
    buttonImage.src = 'assets/imgs/play.svg'
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