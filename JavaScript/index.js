import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { sounds } from "./sounds.js";

import {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  secondsDisplay,
  minutesDisplay,
} from "./elements.js";

const controls = Controls({ buttonPlay, buttonPause, buttonSet, buttonStop });

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = sounds();

buttonPlay.addEventListener("click", () => {

  timer.countdown(controls.play);
  sound.pressButton();
});

buttonPause.addEventListener("click", () => {
  controls.pause();

  timer.hold();
  sound.pressButton();
});

buttonStop.addEventListener("click", () => {
  controls.reset();
  timer.reset();
  sound.pressButton();
});

buttonSoundOff.addEventListener("click", () => {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");

  sound.bgAudio.play();
});

buttonSoundOn.addEventListener("click", () => {
  buttonSoundOff.classList.remove("hide");
  buttonSoundOn.classList.add("hide");
  
  sound.bgAudio.pause();
});

buttonSet.addEventListener("click", () => {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    timer.reset();
    return;
  }

  newMinutes;

  timer.updateDisplay(newMinutes, 0);
  timer.updateMinutes(newMinutes);
});
