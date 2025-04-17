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

  if (modeText) {
    modeText.textContent = isDark ? 'MODO CLARO' : 'MODO OSCURO';
  }

  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
}

// ✅ Aplicar modo guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  const body = document.body;
  const modeText = document.getElementById('modeText');

  if (savedMode === 'true') {
    body.classList.add('dark');
    if (modeText) modeText.textContent = 'MODO CLARO';
  } else {
    if (modeText) modeText.textContent = 'MODO OSCURO';
  }
});

// 🧠 Funcionalidad de "Pierde el tiempo aquí"
function perderTiempo() {
  alert("¡Ya estás perdiendo el tiempo aquí 😄!");
}

function abrirFormulario() {
  document.getElementById('formularioModal').style.display = 'flex';
}

function cerrarFormulario() {
  document.getElementById('formularioModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
  // Botón contacto (solo en acerca de mí)
  const btn = document.getElementById("boton-contacto");
  if (btn) {
    btn.addEventListener("click", function () {
      window.location.href = "mailto:andrealizetm091@gmail.com";
    });
  }

  // Botón descargar CV (solo en acerca de mí)
  const cvBtn = document.getElementById('cvDownload');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert('Gracias por descargar mi CV. ¡Espero estemos en contacto pronto!');
    });
  }

  // Formulario opiniones (solo en opiniones.html)
  const opinionForm = document.getElementById('opinionForm');
  const opinionesContainer = document.querySelector('.opiniones-container');

  if (opinionForm && opinionesContainer) {
    const opinionesGuardadas = JSON.parse(localStorage.getItem('opiniones')) || [];

    opinionesGuardadas.forEach(({ nombre, comentario }) => {
      agregarOpinionAlDOM(nombre, comentario);
    });

    opinionForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const comentario = document.getElementById('comentario').value.trim();

      if (nombre && comentario) {
        agregarOpinionAlDOM(nombre, comentario);
        opinionesGuardadas.push({ nombre, comentario });
        localStorage.setItem('opiniones', JSON.stringify(opinionesGuardadas));
        opinionForm.reset();
        cerrarFormulario();
      }
    });

    function agregarOpinionAlDOM(nombre, comentario) {
      const nuevaOpinion = document.createElement('blockquote');
      nuevaOpinion.className = 'opinion-estilo';
      nuevaOpinion.innerHTML = `<p>${comentario}</p><footer>— ${nombre}</footer>`;
      opinionesContainer.appendChild(nuevaOpinion);
    }
  }
});
