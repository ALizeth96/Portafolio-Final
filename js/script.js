// 🧍 Movimiento de la muñeca al mover el mouse (solo si existe)
const character = document.getElementById('character');
const characterImg = character?.querySelector('img');

if (character && characterImg) {
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const posX = e.clientX;
    const distance = (posX - centerX) / centerX;
    const maxOffset = 40;

    character.style.left = `${50 + distance * maxOffset}%`;
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

  // Contacto (solo en acerca-de-mi)
  const btnContacto = document.getElementById("boton-contacto");
  if (btnContacto) {
    btnContacto.addEventListener("click", function () {
      window.location.href = "mailto:andrealizetm091@gmail.com";
    });
  }

  // Descargar CV (si existe el botón con ID)
  const cvBtn = document.getElementById('cvDownload');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert('Gracias por descargar mi CV. ¡Espero estemos en contacto pronto!');
    });
  }

  // Opiniones (solo en opiniones.html)
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

// Modal formulario
function abrirFormulario() {
  const modal = document.getElementById('formularioModal');
  if (modal) modal.style.display = 'flex';
}

function cerrarFormulario() {
  const modal = document.getElementById('formularioModal');
  if (modal) modal.style.display = 'none';
}

// Mensaje divertido en botón
function perderTiempo() {
  alert("¡Ya estás perdiendo el tiempo aquí 😄!");
}
