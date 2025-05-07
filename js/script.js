// 🧍 Movimiento de la muñeca (si existe)
const character = document.getElementById('character');
const characterImg = character?.querySelector('img');

if (character && characterImg) {
  document.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const distance = (e.clientX - centerX) / centerX;
    const offset = 40;

    character.style.left = `${50 + distance * offset}%`;
    characterImg.style.transform = distance > 0 ? 'scaleX(1)' : 'scaleX(-1)';
  });
}

// 🌙 Alternar modo oscuro con localStorage
function toggleMode() {
  const body = document.body;
  const modeText = document.getElementById('modeText');
  body.classList.toggle('dark');

  const isDark = body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
  if (modeText) modeText.textContent = isDark ? 'MODO CLARO' : 'MODO OSCURO';
}

// ✅ Aplicar modo guardado al cargar
window.addEventListener('DOMContentLoaded', () => {
  // 🌓 Modo oscuro persistente
  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark', isDark);
  const modeText = document.getElementById('modeText');
  if (modeText) modeText.textContent = isDark ? 'MODO CLARO' : 'MODO OSCURO';

  // 🗓 Año automático en footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // 📩 Botón de contacto
  const contactoBtn = document.getElementById("boton-contacto");
  if (contactoBtn) {
    contactoBtn.addEventListener("click", () => {
      window.location.href = "mailto:andrealizetm091@gmail.com";
    });
  }

  // 📄 Botón para descargar CV
  const cvBtn = document.getElementById('cvDownload');
  if (cvBtn) {
    cvBtn.addEventListener('click', () => {
      alert('Gracias por descargar mi CV. ¡Espero estemos en contacto pronto!');
    });
  }

  // 🗣 Opiniones dinámicas
  const opinionForm = document.getElementById('opinionForm');
  const opinionesContainer = document.querySelector('.opiniones-container');

  if (opinionForm && opinionesContainer) {
    const opinionesGuardadas = JSON.parse(localStorage.getItem('opiniones')) || [];

    // Mostrar opiniones previas
    opinionesGuardadas.forEach(({ nombre, comentario }) => {
      agregarOpinion(nombre, comentario);
    });

    opinionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const comentario = document.getElementById('comentario').value.trim();

      if (nombre && comentario) {
        agregarOpinion(nombre, comentario);
        opinionesGuardadas.push({ nombre, comentario });
        localStorage.setItem('opiniones', JSON.stringify(opinionesGuardadas));
        opinionForm.reset();
        cerrarFormulario();
      }
    });

    function agregarOpinion(nombre, comentario) {
      const nueva = document.createElement('blockquote');
      nueva.className = 'opinion-estilo';
      nueva.innerHTML = `<p>${comentario}</p><footer>— ${nombre}</footer>`;
      opinionesContainer.appendChild(nueva);
    }
  }

  // 🔼 Mostrar/Ocultar contenido de tarjetas
  document.querySelectorAll('.ver-mas-boton').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card-proyecto');
      const extraContent = card.querySelector('.contenido-extra');

      if (!extraContent) return;

      const isHidden = extraContent.style.display === 'none' || extraContent.style.display === '';
      extraContent.style.display = isHidden ? 'block' : 'none';
      button.textContent = isHidden ? 'Ver menos' : 'Ver más';
      card.classList.toggle('expanded', isHidden);
    });
  });
});

// 🎭 Modal del formulario
function abrirFormulario() {
  const modal = document.getElementById('formularioModal');
  if (modal) modal.style.display = 'flex';
}

function cerrarFormulario() {
  const modal = document.getElementById('formularioModal');
  if (modal) modal.style.display = 'none';
}

function perderTiempo() {
  alert("¡Ya estás perdiendo el tiempo aquí 😄!");
}

