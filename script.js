/* =========================================================
   GENESIS - Funcionalidades de la página
   ========================================================= */

// Datos demostrativos para las diez opiniones del carrusel.
const testimonials = [
  { name: "María Fernández", text: "La atención fue muy amable. Mi perrito estuvo tranquilo durante toda la visita. 🐶", photo:  womenPhoto(32) },
  { name: "Andrés Castillo", text: "Me explicaron cada detalle de la consulta con mucha paciencia. ¡Gracias! 💜", photo: menPhoto(42) },
  { name: "Lucía Ramírez", text: "Un espacio donde se nota el cariño por los animales. Mi gatita quedó preciosa. 🐱", photo: womenPhoto(44) },
  { name: "Daniel Pérez", text: "Me orientaron sobre los cuidados que necesitaba mi compañero. Muy agradecido. 🐾", photo: menPhoto(35) },
  { name: "Sofía Martínez", text: "El trato fue cercano y respetuoso. Sin duda, una experiencia agradable. 🌷", photo: womenPhoto(25) },
  { name: "Gabriel Torres", text: "Me gustó la claridad con la que explicaron las recomendaciones para mi mascota. ⭐", photo: menPhoto(52) },
  { name: "Valentina Cruz", text: "Mi pequeña recibió mucho cariño. Volveríamos con confianza. 💕", photo: womenPhoto(56) },
  { name: "Mateo Jiménez", text: "La atención y la dedicación hacen la diferencia. ¡Excelente experiencia! 🐕", photo: menPhoto(61) },
  { name: "Camila Reyes", text: "Un lugar bonito y una atención muy humana. Gracias por cuidar de ellos. 🌸", photo: womenPhoto(68) },
  { name: "Nicolás Herrera", text: "Nos sentimos acompañados y bien orientados en todo momento. 🐾", photo: menPhoto(75) }
];

function womenPhoto(id) { return `https://randomuser.me/api/portraits/women/${id}.jpg`; }
function menPhoto(id) { return `https://randomuser.me/api/portraits/men/${id}.jpg`; }

const track = document.getElementById("testimonialTrack");
let testimonialIndex = 0;

function renderTestimonials() {
  if (!track) return;
  track.innerHTML = testimonials.map((item) => `
    <article class="testimonial-card">
      <img class="client-avatar" src="${item.photo}" alt="Foto ilustrativa de ${item.name}" loading="lazy">
      <div class="client-stars" aria-label="Cinco estrellas">★★★★★</div>
      <h3>${item.name}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
  updateCarousel();
}

function visibleCards() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 767) return 2;
  if (window.innerWidth <= 991) return 3;
  return 4;
}

function updateCarousel() {
  if (!track || !track.children.length) return;
  const firstCard = track.children[0];
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  const step = firstCard.getBoundingClientRect().width + gap;
  const maxIndex = Math.max(0, testimonials.length - visibleCards());
  testimonialIndex = Math.min(testimonialIndex, maxIndex);
  track.style.transform = `translateX(-${testimonialIndex * step}px)`;
}

document.getElementById("prevTestimonials")?.addEventListener("click", () => {
  testimonialIndex = Math.max(0, testimonialIndex - 1);
  updateCarousel();
});

document.getElementById("nextTestimonials")?.addEventListener("click", () => {
  const maxIndex = Math.max(0, testimonials.length - visibleCards());
  testimonialIndex = Math.min(maxIndex, testimonialIndex + 1);
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
renderTestimonials();

// Validación del formulario y preparación del correo.
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  [name, email, message].forEach((field) => {
    field.classList.toggle("is-invalid", !field.checkValidity());
  });

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const subject = encodeURIComponent(`Consulta para Genesis - ${name.value.trim()}`);
  const body = encodeURIComponent(
    `Nombre: ${name.value.trim()}\nCorreo: ${email.value.trim()}\n\nMensaje:\n${message.value.trim()}`
  );

  // Se abre el programa de correo del usuario. No se envía ni almacena información desde esta web.
  window.location.href = `mailto:?subject=${subject}&body=${body}`;

  const modalElement = document.getElementById("mailModal");
  if (window.bootstrap && modalElement) {
    window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
  }

  contactForm.reset();
  [name, email, message].forEach((field) => field.classList.remove("is-invalid"));
});

// Año automático en el pie de página.
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Cerrar el menú móvil al seleccionar una sección.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu?.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
