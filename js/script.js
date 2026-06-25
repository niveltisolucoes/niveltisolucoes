// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

function closeMenu() {
  menuToggle.classList.remove('active');
  navMenu.classList.remove('active');
}

// Header scroll effect
const header = document.getElementById('header');

function updateHeaderState() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
window.addEventListener('load', updateHeaderState);
window.addEventListener('pageshow', updateHeaderState);

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// Contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const empresa = document.getElementById('empresa').value;
  const servico = document.getElementById('servico').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  const servicoText = servico ? `Serviço: ${servico}` : '';

  const text = `Olá, NivelTI!%0A%0A*Nome:* ${encodeURIComponent(nome)}%0A*Empresa:* ${encodeURIComponent(empresa || 'N/A')}%0A${servico ? `*Serviço:* ${encodeURIComponent(servico)}%0A` : ''}*WhatsApp:* ${encodeURIComponent(whatsapp)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Mensagem:* ${encodeURIComponent(mensagem)}`;

  window.open(`https://wa.me/5585997961151?text=${text}`, '_blank');
});
