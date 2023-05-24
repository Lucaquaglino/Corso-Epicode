
// - - - - - - - - - - - - - - - definizione variabile in base ad album selezionato
const selectedAlbumId = new URLSearchParams(window.location.search).get("id");
console.log('id album selezionato:',selectedAlbumId);

var playlist;
var dataPlaylist;
var shuffle = false;

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
                albumCover.innerHTML = `<img src="${cover}" class="img-fluid w-100" alt="..." id="albumImg"></div>`;

                const albumTitle = document.getElementById('albumTitle');
                albumTitle.innerHTML = `<h1 class="d-none d-lg-block" id="albumTitle2">${title}</h1>
                <h1 class="d-block d-lg-none">${title}</h1>`;

                const artistPicture = document.getElementById('artistPicture');
                artistPicture.innerHTML = `<img src="${contributors[0].picture_small}" class="img-fluid rounded-circle me-1" alt="..." width="24"><a href="artistPages.html?artist=${contributors[0].id}">${contributors[0].name}</a> - <span>${release_date.substr(0, 4)}</span> - <span> ${nb_tracks} brani</span>, <span>${albumDurationNew}</span>`;

                

                // - - - - - - - - - - - - - - - manipolazione DOM per inserimento brani
                const songsContainer = document.getElementById('songsContainer');

                let tracksArray = tracks.data;
                dataPlaylist = tracksArray;
                dataPlaylist.forEach((el,i) => el['indice'] = i);
                initPlaylist();
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
                    <div class="col-12 mb-2 album">
                        <div class="row">
                        <div class="col-1 text-end">${i+1}</div><div class="col-5">${songTitle}<br><span>${contributors[0].name}</span></div><div class="col-4">${songRank}</div><div class="col-2">${songDurationNew}</div>
                        </div>
                    </div>
                    `                  
                }
                setupList();
            }
            
            else {
                throw new Error("Richiesta non a buon fine")
            }
    }
    catch (error) {
        alert(error)
    }



    setupAudioComponents();
}

function actionPlay(){
    if(playlist.initialized()){
        playlist.isPlay ? playlist.pause() : playlist.restart();
      updatePlayButton();
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

var loop = false;


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

function initPlaylist(){
    playlist = new Sound(dataPlaylist.map(element => element.preview),100, this.loop, updateList);
}

function setupAudioComponents(){

    document.getElementById('play').onclick = () => {
        
        playAll();
       
    };

    let buttonPlay = document.getElementById('controlPlay');
    buttonPlay.onclick = () => {
        actionPlay();
     
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
        document.getElementById('controlLoop').classList.toggle('active');
    };


    let buttonShuffle = document.getElementById('controlShuffle');
    buttonShuffle.onclick = () => {
        if(!playlist){
            return;
        }
        if(shuffle){
            playlist.source = dataPlaylist.map(element => element.preview);
            playlist.index = sessionStorage.getItem('album'+playlist.index);
        }else{
            shuff();
        }
        shuffle = !shuffle;
        document.getElementById('controlShuffle').classList.toggle('active');
    };
}


function updatePlayButton(){
    let playIcon = document.getElementById('iconPlay');
    let pauseIcon = document.getElementById('iconPause');
    let playMobile = document.getElementById('iconPlay2');
    let pauseMobile = document.getElementById('iconPause2');
    let buttonImage = document.querySelector('#play i');
   if( playlist.isPlay){
        playIcon.style = 'display:none;';
        pauseIcon.style = 'display:block;';
        buttonImage.classList = 'bi bi-pause-fill'
        playMobile.style.display = 'none';
        pauseMobile.style.display = 'block';
   }else{
    pauseIcon.style = 'display:none;';
    playIcon.style = 'display:block;';
    buttonImage.classList = 'bi bi-play-fill'
    playMobile.style.display = 'block';
        pauseMobile.style.display = 'none';
   }
}

function playAll(){
   
  
    if(playlist && playlist.initialized()){
        playlist.isPlay ? playlist.pause() : playlist.restart();
  
     
    }else{
 
    
    
    playlist.start();
    }
    updatePlayButton();
}

function updateList(index){
    let i = sessionStorage.getItem('album'+index);
    let list = document.getElementsByClassName('album');
    for(let i = 0; i < list.length; i++){
        list.item(i).classList.remove('selected');
    }
    let data;
    if(i && shuffle){
        list.item(i).classList.add('selected');
        data = dataPlaylist[i];
    }else{
        list.item(index).classList.add('selected');
        data = dataPlaylist[index];
    }
    updateMsg(data);
    updateArtistData(data);
    
}

function setupList(){
    let list = document.getElementsByClassName('album');
    for(let i = 0; i < list.length; i++){
        let item =list.item(i);
        item.onclick = () => {
            for(let i = 0; i < list.length; i++){
                list.item(i).classList.remove('selected');
            }
            item.classList.add('selected');
            let data = dataPlaylist[i];
            if(!playlist){
            
                playlist = new Sound(dataPlaylist.map(element => element.preview),100, this.loop, updateList);
              
            }
            playlist.playFrom(i, data.preview);
        };
    }
}

function updateMsg(data){
    msg(`artista: ${data.artist.name} - brano: ${data.title_short}`);
}

function shuff(){
    let indexes = [];
    while(indexes.length < dataPlaylist.length){
        indexes.push(Math.floor(Math.random() * dataPlaylist.length));
    }
    let el = dataPlaylist.map(element => element.preview);
    playlist.source = dataPlaylist.map(element => element.preview).sort((a,b) => indexes[el.indexOf(a)] < indexes[el.indexOf(b)] ? -1 : 1);
    let temp = dataPlaylist.map(el => el).sort((a,b) => indexes[a.indice] < indexes[b.indice] ? -1 : 1);
    temp.forEach((el,index) => sessionStorage.setItem('album'+index, el.indice));

}

function removeMsg(){
    document.getElementById('txt').innerHTML = '';
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