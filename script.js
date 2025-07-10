// Lluvia de corazones
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerText = "💖";
  corazon.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 4000);
}
setInterval(crearCorazon, 300);

// Mostrar secciones
function mostrarSeccion(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Carta de frases
const frases = [
  "Hola amor, hoy quise darte algo diferente.",
  "Algo que se quedara contigo más allá de los regalos físicos.",
  "Una carta hecha con calma, con todo lo que siento por ti.",
  "Desde que te conocí, mi vida cambió en todos los sentidos.",
  "Tu risa, tu mirada, tu forma de abrazarme... me hacen sentir en casa.",
  "Gracias por ser tú, por acompañarme, por amarme.",
  "Te amo con todo mi corazón 💗",
  "Siempre tuyo, Kevin"
];
let i = 0;
function mostrarFrase() {
  const cartaTexto = document.getElementById("cartaTexto");
  if (i < frases.length) {
    cartaTexto.innerText = frases[i];
    i++;
  } else {
    cartaTexto.innerText = "Fin de la carta 💌";
  }
}

// Chat interactivo
let paso = 1;
function respuesta(texto) {
  const chat = document.getElementById("chatBox");
  const rta = document.createElement("div");
  rta.className = "msg el";
  rta.innerText = texto;
  chat.appendChild(rta);

  setTimeout(() => {
    let respuesta = "";
    if (paso === 1) {
      respuesta = "Solo quería recordarte cuánto te amo 💖";
    } else if (paso === 2) {
      respuesta = "Hice esta página para ti, para que nunca olvides cuánto significas para mí 🥹";
    } else if (paso === 3) {
      respuesta = "Gracias por hacerme sentir tan especial cada día ✨";
      document.getElementById("respuestas").style.display = "none";
    }
    if (respuesta) {
      agregarMensaje(respuesta);
      paso++;
    }
  }, 1000);
}

function agregarMensaje(texto) {
  const chat = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = "msg yo";
  msg.innerText = texto;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

// Ver nota secreta
function verNota() {
  const clave = document.getElementById("clave").value;
  if (clave.toLowerCase() === "origen") {
    document.getElementById("notaSecreta").style.display = "block";
  } else {
    alert("Clave incorrecta. Intenta de nuevo 💔");
  }
}
