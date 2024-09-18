const btnRandom = document.getElementById('#random-btn');

btnRandom.addEventListener('mouseover', () => {
    const x = Math.random()* (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
});

function moverAleatoriamente(btn){ 
// Inicializa la posición del botón
btn.style.left = Math.floor(Math.random()* 90 + 5) + "%";
btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
}