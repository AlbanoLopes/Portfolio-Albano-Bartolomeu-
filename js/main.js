// ---------- Menu mobile ----------
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

menuButton.addEventListener("click", () => {
  setMenu(!navLinks.classList.contains("open"));
});

// Fecha o menu ao clicar num link (nav e logótipo)
document.querySelectorAll(".nav-links a, .navbar .brand").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Fecha com a tecla Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

// Fecha o menu se a janela voltar a ficar larga
window.matchMedia("(min-width: 721px)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});

// ---------- Formulário de contacto ----------
// Site estático = sem servidor. O formulário abre o cliente de email do
// visitante com a mensagem já preenchida (mailto). Se mais tarde quiser
// receber mensagens directamente, pode trocar por Formspree, Web3Forms, etc.
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const nome = data.get("nome").toString().trim();
  const email = data.get("email").toString().trim();
  const mensagem = data.get("mensagem").toString().trim();

  const subject = `Contacto via portfólio — ${nome}`;
  const body = `${mensagem}\n\n—\n${nome}\n${email}`;

  window.location.href =
    `mailto:${form.dataset.email}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
});
