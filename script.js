const envelope = document.getElementById("envelope");
const title = document.getElementById("title");
const message = document.getElementById("message");

// Personalización
const nombre = prompt("Mi Panquesito");
const mensajePersonalizado = prompt("Mi amor yo sé que no es una carta a mano pero te dije que sería creativo, yo no estoy acostumbrado a hacerlo pero sé lo que significa para ti no quiero ser un chavo más y ya porque para mí tu no eres una chava más y ya, quiero en verdad deseo hacerte sentir amada hoy mañana y siempre mi amor deseo estar a tu lado muchos muchos años quiero hacerte sentir amada hoy, mañana y siempre si tendremos días complicados y días muy muy buenos pero quiero que te quede muy claro algo ni en los días más malos dejaré de amarte porqué no importa que tan enojados podamos estar yo te seguiré amando de eso no tengas ninguna duda, hoy te pregunto mi amor... 💖¿Me permites amarte cada día aceptando ser mi San Valentín?💖");

if (nombre) {
  title.textContent = `Para ${nombre} 💖`;
}

if (mensajePersonalizado) {
  message.textContent = mensajePersonalizado;
}

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
