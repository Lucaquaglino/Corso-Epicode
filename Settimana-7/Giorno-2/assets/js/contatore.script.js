var inizio = sessionStorage.getItem("startTime");
if (!inizio) {
  inizio = Date.now();
  sessionStorage.setItem("startTime", inizio);
}

var tempoPassato = Math.floor((Date.now() - inizio) / 1000);
document.getElementById("timer").textContent = tempoPassato + " secondi";

setInterval(function () {
  sessionStorage.setItem("tempo Passato", tempoPassato);
  tempoPassato = Math.floor((Date.now() - inizio) / 1000);
  document.getElementById("timer").textContent = tempoPassato + " secondi";
}, 1000);
