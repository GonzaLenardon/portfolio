const modal = document.getElementById('customModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');

// Selecciona todos los botones con "data-title"
const buttons = document.querySelectorAll('button[data-title]');

const proyectos = {
  hybridnet: {
    title: 'Proyecto Hybridnet',
    descripcion: `
     <p class="detalle-proyecto">
      Junto al equipo desarrollé un sistema de formularios digitales para el control y seguridad en tareas de alto riesgo. Este sistema permite validar datos críticos en tiempo real, ayudando a prevenir incidentes, facilitar auditorías internas y cumplir con normativas laborales.</p>
      <ul class="items-tareas">
        <li><i class="fa-solid fa-layer-group"></i> Gestión completa de productos, proveedores, ventas, compras y gastos.</li>
        <li><i class="fa-solid fa-arrows-left-right"></i> Intercambio de stock entre sucursales con actualización automática.</li>
        <li><i class="fa-solid fa-barcode"></i> Generación e impresión de etiquetas con código de barras.</li>
        <li><i class="fa-solid fa-chart-line"></i> Reportes y métricas en tiempo real para la toma de decisiones.</li>
      </ul>

      <p class="logros">Logros</p>
      <ul class="ullogros">
        <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Reducción del tiempo de control de inventarios en un 40%.</li>
        <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Administración centralizada del inventario.</li>
        <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Incremento de la eficiencia operativa en tres sucursales.</li>
        <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Reportes y métricas precisas para decisiones estratégicas.</li>
      </ul>

      <div class="badges">
        <span class="badge b1">React</span>
        <span class="badge b2">Axios</span>
        <span class="badge b4">Bootstrap</span>
        <span class="badge b3">Node.js</span>
        <span class="badge b1">Express</span>
        <span class="badge b2">Sequelize</span>
        <span class="badge b3">JWT</span>
        <span class="badge b4">bcrypt</span>
      </div>
    `,
  },
  amorInfinito: {
    title: 'Proyecto Amor Infinito',
    descripcion: `
    <p class="detalle-proyecto">
     Desarrollé un sistema web integral y responsive para la gestión de stock en una tienda de ropa con tres sucursales, centralizando la administración y optimizando el control de inventario.</p>
    <ul class="items-tareas">
    <li><i class="fa-solid fa-layer-group"></i> Gestión completa de productos, proveedores, ventas, compras y gastos.</li>
    <li><i class="fa-solid fa-arrows-left-right"></i> Intercambio de stock entre sucursales con actualización automática.</li>
    <li><i class="fa-solid fa-barcode"></i> Generación e impresión de etiquetas con código de barras.</li>
    <li><i class="fa-solid fa-chart-line"></i> Reportes y métricas en tiempo real para la toma de decisiones.</li>
   
  </ul>

  <p class="logros">Logros</p>
  <ul class="ullogros">
  <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Reducción del tiempo de control de inventarios en un 40%.</li>
  <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Administración centralizada del inventario.</li>
  <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Incremento de la eficiencia operativa en tres sucursales.</li>
  <li class="lilogro"><i class="fa-solid fa-check-circle"></i> Reportes y métricas precisas para decisiones estratégicas.</li>

   
  </ul>
   <div class="badges">
 <span class="badge b1">React</span>
         
          <span class="badge b2">Axios</span>
          <span class="badge b4">Bootstrap</span>
            <span class="badge b3">Node.js</span>

          <span class="badge b1">Express</span>
          <span class="badge b2">Sequelize</span>
          <span class="badge b3">JWT</span>
          <span class="badge b4">bcrypt</span>
          </div>
`,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // evita redirección

    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mblanopv', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        statusMsg.textContent = '✅ ¡Mensaje enviado con éxito!';
        statusMsg.className = 'status-msg success';
        form.reset();
      } else {
        statusMsg.textContent = '❌ Ocurrió un error, intenta de nuevo.';
        statusMsg.className = 'status-msg error';
      }
    } catch (err) {
      statusMsg.textContent = '⚠️ Error de conexión, revisa tu internet.';
      statusMsg.className = 'status-msg error';
    }
  });
});

document.querySelectorAll('button[data-proyecto]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.proyecto;
    modalTitle.textContent = proyectos[key].title;
    modalBody.innerHTML = proyectos[key].descripcion; // 👈 permite listas, badges, iconos
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar si clickeás afuera
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

var swiper = new Swiper('.mySwiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
