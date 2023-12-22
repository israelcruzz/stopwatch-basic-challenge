const hour: HTMLElement | null = document.querySelector(".hour");
const buttonIniciar: HTMLElement | null = document.querySelector(".iniciar");
const buttonPause: HTMLElement | null = document.querySelector(".parar");
const buttonResetar: HTMLElement | null = document.querySelector(".resetar");

let timer: NodeJS.Timeout | undefined;
let seconds: number = 0;

const convertFormat = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
};

const contadorTimer = () => {
  if (hour) {
    clearInterval(timer as NodeJS.Timeout);
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

export { convertFormat, contadorTimer, pauseTimer, stopTimer };
