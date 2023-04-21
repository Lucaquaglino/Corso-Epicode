// ---------------------- DOM ELEMENTS ----------------------
const stars = document.querySelectorAll('#starBox svg path');

// ---------------------- ANIMAZIONE STELLE ----------------------

//ascolta il click di tutte le stelle
// i forEach creano degli indici per ciclare le stelle
//per ogni stella con indice inferiore a quella cliccata, cambia il colore

stars.forEach((e, i) => e.addEventListener('click', () => stars.forEach((star, j) => (i >= j) ? star.setAttribute('fill', '#00FFFF') : star.setAttribute('fill', '#582070'))))