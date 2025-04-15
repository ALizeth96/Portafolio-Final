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

// 🌙 Alternar modo oscuro con guardado en localStorage
function toggleMode() {
  const body = document.body;
  const modeText = document.getElementById('modeText');

  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');

  // Cambiar texto del botón
  modeText.textContent = isDark ? 'MODO CLARO' : 'MODO OSCURO';

  // Guardar preferencia en localStorage
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// ✅ Aplicar modo guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  const body = document.body;
  const modeText = document.getElementById('modeText');

  if (savedMode === 'true') {
    body.classList.add('dark');
    modeText.textContent = 'MODO CLARO';
  } else {
    modeText.textContent = 'MODO OSCURO';
  }
});

