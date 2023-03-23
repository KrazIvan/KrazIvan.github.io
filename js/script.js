document.getElementById("background-music").volume = 0.5;

if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

const lightSwitchSounds = [
  "./assets/audio/light_switch_audio1.wav",
  "./assets/audio/light_switch_audio2.wav",
  "./assets/audio/light_switch_audio3.wav",
  "./assets/audio/light_switch_audio4.wav",
  "./assets/audio/light_switch_audio5.wav"];


function playRandomSound(soundArray) {
  var randomIndex = Math.floor(Math.random() * soundArray.length);
  var lightSwitchSound = new Audio(soundArray[randomIndex]);
  lightSwitchSound.play();
}

function darkMode() {
  playRandomSound(lightSwitchSounds);
}