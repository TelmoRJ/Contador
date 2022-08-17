import { sounds } from "./sounds.js";

export function Timer({ minutesDisplay, secondsDisplay, resetControls }) {
  let minutes = minutesDisplay.textContent;
  let timerTimeOut;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countdown(play) {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      const isFinished = minutes <= 0 && seconds <= 0;
      
      if(play) {
        play(isFinished);
      }

      if (isFinished) {
        resetControls();
        reset();
        sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 2;

        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  return {
    reset,
    countdown,
    updateDisplay,
    updateMinutes,
    hold,
    minutes,
  };
}
