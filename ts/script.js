"use strict";
const hour = document.querySelector(".hour");
const buttonIniciar = document.querySelector(".iniciar");
const buttonPause = document.querySelector(".parar");
const buttonResetar = document.querySelector(".resetar");
let timer;
let seconds = 0;
const convertFormat = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};
const contadorTimer = () => {
  if (hour) {
    clearInterval(timer);
    seconds = 0;
    timer = setInterval(() => {
      seconds++;
      if (hour) {
        hour.textContent = convertFormat(seconds);
      }
    }, 1000);
  }
};
const pauseTimer = () => {
  if (timer) {
    clearInterval(timer);
  }
};
const stopTimer = () => {
  if (timer) {
    clearInterval(timer);
  }
  if (hour) {
    hour.textContent = "00:00:00";
  }
};
if (buttonIniciar) {
  buttonIniciar.addEventListener("click", contadorTimer);
}
if (buttonPause) {
  buttonPause.addEventListener("click", pauseTimer);
}
if (buttonResetar) {
  buttonResetar.addEventListener("click", stopTimer);
}
