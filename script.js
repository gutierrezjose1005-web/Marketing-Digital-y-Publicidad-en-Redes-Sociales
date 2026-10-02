// ImpulsaStudio - JavaScript principal

// Menú hamburguesa responsive
const ham = document.getElementById('hamburger');
const links = document.getElementById('navLinks');

ham.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// Formulario de contacto
document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formOk').style.display = 'block';
  e.target.querySelector('button').textContent = '✅ ¡Solicitud enviada!';
  setTimeout(() => { e.target.reset() }, 800);
});
