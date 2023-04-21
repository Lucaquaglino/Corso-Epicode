// ---------------------- DOM ELEMENTS ----------------------

const difficult = document.getElementById('selectDifficult'); // difficoltà selezionata
const btnProceed = document.getElementById('proceedButton'); // bottone per procedere
const terms = document.getElementById('terms'); // check dei termini per procedere

// ---------------------- SBLOCCO BOTTONE PROCEED ----------------------

btnProceed.disabled = true; // bottone disabilitato

// controlla selezione difficoltà
difficult.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? unlock() : lock());

// eventListner sblocco / blocco bottone
terms.addEventListener('change', () => (terms.checked === true && difficult.value !== '') ? unlock() : lock());

// sblocco / blocco bottone
function unlock(){
    btnProceed.disabled = false;
    btnProceed.classList.add('blueButton'); //aggiunge la classe per lo stile luminoso
    btnProceed.classList.remove('offProceed'); //rimuove la classe per lo stile di base
}

function lock(){
    btnProceed.disabled = true;
    btnProceed.classList.add('offProceed'); //aggiunge la classe per lo stile di base
    btnProceed.classList.remove('blueButton'); //rimuove la classe per lo stile luminoso
}


// ---------------------- EVENTO CLICK PROCEED ----------------------

// immagazzina la difficoltà selezionata nel local storage
btnProceed.addEventListener('click', () => localStorage.setItem('diff', difficult.value ));