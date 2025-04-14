// 🧍 Movimiento de la muñeca al mover el mouse
const character = document.getElementById('character');
const characterImg = character?.querySelector('img'); // Prevención por si no carga bien

if (character && characterImg) {
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const posX = e.clientX;
    const distance = (posX - centerX) / centerX; // Valor entre -1 y 1
    const maxOffset = 40;

    // Movimiento horizontal de la muñeca
    character.style.left = `${50 + distance * maxOffset}%`;

    // Volteo de la imagen según la dirección del mouse
    characterImg.style.transform = distance > 0 ? 'scaleX(1)' : 'scaleX(-1)';
  });
}

// 🌙 Alternar modo oscuro
function toggleMode() {
  const body = document.body;
  const modeText = document.getElementById('modeText');
  body.classList.toggle('dark');
  modeText.textContent = body.classList.contains('dark') ? 'LIGHT' : 'MODO';
}




