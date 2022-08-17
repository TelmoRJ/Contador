export function Controls({ buttonPlay, buttonPause, buttonSet, buttonStop }) {
  function play(isFinished) {

    if(isFinished) return;

    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonStop.classList.remove("hide");
    buttonSet.classList.add("hide");
  }

  function pause() {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos Minutos?");
    if(!newMinutes) {
      return false
    }
    
    return newMinutes
  }

  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  return {
    reset,
    play,
    pause,
    getMinutes
  }
}
