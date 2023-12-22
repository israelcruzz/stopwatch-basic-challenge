const hour = document.querySelector(".hour");
const buttonIniciar = document.querySelector(".iniciar");
const buttonPause = document.querySelector(".parar");
const buttonResetar = document.querySelector(".resetar");

let timer;
let seconds;

const convertFormat = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};

const contadorTimer = () => {
  clearInterval(timer);
  seconds = 0;

  timer = setInterval(() => {
    seconds++;
    hour.textContent = convertFormat(seconds);
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(timer);
};

const stopTimer = () => {
  clearInterval(timer);
  hour.textContent = "00:00:00";
};

buttonIniciar.addEventListener("click", contadorTimer);
buttonPause.addEventListener("click", pauseTimer);
buttonResetar.addEventListener("click", stopTimer);

module.exports = { convertFormat, contadorTimer, pauseTimer, stopTimer };
