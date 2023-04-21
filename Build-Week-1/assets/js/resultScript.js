// ---------------------- DOM ELEMENTS ----------------------
const canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
const correctDom = document.getElementById('correct');
const wrongDom = document.getElementById('wrong');
const numberCorrect = document.getElementById('numberCorrect');
const numberWrong = document.getElementById('numberWrong');
const totalQuestions = document.querySelectorAll('.totalQuestions');
const innerResult = document.getElementById('innerResult');

const wrongAnswers = document.getElementById('wrongAnswers');
const correctAnswers = document.getElementById('correctAnswers');

// ---------------------- PASSAGGIO RISULTATO ----------------------
const risultatoQuiz = localStorage.getItem('punteggioFinale');
const diff = localStorage.getItem('diff')


// percentuale risposte
let percentCorrect = 0;
let percentIncorrect = 0;


// ---------------------- SET PERCENTUALI E GRAFICA ----------------------

function percentageSet() {
    // variabile che immagazzina momentaneamente il numero di domande totali in base alla difficoltà
    let tempDiff = 0;

    // check difficoltà per assegnazione
    if (diff === 'easy') {
        tempDiff = 7;
    } else {
        tempDiff = 10;
    }

    // assegnazione DOM delle domande totali
    totalQuestions.forEach((e) => e.innerHTML = tempDiff);

    // assegnazione DOM domande giuste/sbagliate su domande totali
    numberCorrect.innerHTML = risultatoQuiz;
    numberWrong.innerHTML = tempDiff - risultatoQuiz;

    // calcolo delle percentuali
    percentCorrect = (risultatoQuiz * 100) / tempDiff;
    percentIncorrect = ((tempDiff - risultatoQuiz) * 100) / tempDiff;

    // assegnazione DOM delle percentuali
    // to fixed prende solo le prime due cifre decimali
    correctDom.innerHTML = percentCorrect.toFixed(2);
    wrongDom.innerHTML = percentIncorrect.toFixed(2);

    // manda in DOM l'esito dell'esame
    checkQuiz();
}

// ---------------------- INSERIEMNTO ESITO QUIZ ----------------------

// messaggio di promozione o bocciatura (esito esame)
//evidenzia la percentuale maggiore di risposte tra corrette e sbagliate
function checkQuiz(){
    if(percentCorrect > 60){

        innerResult.innerHTML = '<h4>Congratulations!<br /><span style="color: #00ffff">You passed the exam.</span></h4><p>We\'ll send you the certficate <br />in few minutes.<br />Check your email (including<br />promotions / spamfolder)</p>';

        correctAnswers.classList.remove('noGlow');
        canvas.classList.add('myCanvasCorrect')
        
    }else{

        innerResult.innerHTML = '<h4>We\'re sorry<br /><span style="color: red">You didn\'t pass the exam.</span></h4>';

        innerResult.classList.add('innerResultWrong')

        wrongAnswers.classList.remove('noGlow');
        canvas.classList.add('myCanvasWrong')
    }
}

// ---------------------- COSTRUZIONE GRAFICO ----------------------

function buildingGrap() {
    
    // costruzione cerchio
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let radius = 150;
    let strokeColorIncorrect = "#C2128D";
    let strokeColorCorrect = "#00FFFF";

    // riempimento barra
    let degreesCorrect = (percentCorrect / 100) * 360;
    let degreesIncorrect = (percentIncorrect / 100) * 360;

    // riempimento
    context.beginPath();
    context.arc(
        centerX,
        centerY,
        radius,
        ((90 + degreesCorrect) * Math.PI) / 180,
        ((-90 - degreesIncorrect) * Math.PI) / 180,
        true
    );

    // bordi risposte giuste
    context.lineWidth = 50;
    context.strokeStyle = strokeColorIncorrect;
    context.stroke();

    // riempimento 
    context.beginPath();
    context.arc(
        centerX,
        centerY,
        radius,
        (-(90 + degreesCorrect) * Math.PI) / 180,
        (-90 * Math.PI) / 180,
        false
    );

    // bordi risposte sbagliate
    context.lineWidth = 50;
    context.strokeStyle = strokeColorCorrect;
    context.stroke();
}


//onload
window.onload = () => {
    percentageSet();
    buildingGrap();
}