//document.getElementById("background-music").volume = 0.5;
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var now = new Date();
var nowHour = now.getHours();
const body = document.body;
const navTitle = document.querySelector(".nav-title");
const buttons = document.querySelectorAll("a.button");
const buttonHoverSound = new Audio("./assets/audio/single-heartbeat.wav");
let canPlaybuttonHoverSound = true;
const buttonHoverSoundDelay = 500;
const lightSwitchSounds = [
  "./assets/audio/light_switch_audio1.wav",
  "./assets/audio/light_switch_audio2.wav",
  "./assets/audio/light_switch_audio3.wav",
  "./assets/audio/light_switch_audio4.wav",
  "./assets/audio/light_switch_audio5.wav"];

if (document.getElementById("my-work-link")) {
  document.getElementById("my-work-link").addEventListener("click", () => {
    document.getElementById("my-work-section").scrollIntoView({behavior: "smooth"})
  })
}

if (nowHour >= 18 || nowHour < 8) {
  switchToDarkMode();
}

function playRandomSound(soundArray) {
  var randomIndex = Math.floor(Math.random() * soundArray.length);
  var lightSwitchSound = new Audio(soundArray[randomIndex]);
  lightSwitchSound.play();
}

function switchToDarkMode() {
  body.classList.toggle("dark-mode");
  navTitle.classList.toggle("dark-mode");
  
  buttons.forEach(button => {
    button.classList.toggle("dark-mode");
  });
}

function darkMode() {
  switchToDarkMode();
  playRandomSound(lightSwitchSounds); 
 
}

// Uncomment to enable button hover sounds (without delay)

//buttons.forEach((button) => {
//  button.addEventListener("mouseover", () => {
//    buttonHoverSound.currentTime = 0;
//    buttonHoverSound.play();
//  });
//});


// Uncomment to enable button hover sounds (with delay)

//buttons.forEach((button) => {
//  button.addEventListener("mouseover", () => {
//    if (canPlaybuttonHoverSound) {
//      buttonHoverSound.currentTime = 0;
//      buttonHoverSound.play();
//      canPlaybuttonHoverSound = false;
//      setTimeout(() => {
//        canPlaybuttonHoverSound = true;
//      }, buttonHoverSoundDelay);
//    }
//  });
//});

//db.transaction(function (tx) { 
//  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
//  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")'); 
//  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")'); 
//});