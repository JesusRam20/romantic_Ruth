const inicio = new Date("2024-02-01T00:00:00");
const leaves = document.getElementById("leaves");

function crearCorazon() {
  const heart = document.createElement("div");
  heart.className = "heart";

  heart.style.left = Math.random() * 230 + "px";
  heart.style.top = Math.random() * 180 + "px";

  leaves.appendChild(heart);

  if (leaves.children.length > 120) {
    clearInterval(intervalo);
  }
}

const intervalo = setInterval(crearCorazon, 300);

function actualizar() {
  const ahora = new Date();
  const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `Mi amor por ti comenzó hace...\n${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizar, 1000);
actualizar();
