//document.getElementById("background-music").volume = 0.5;
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var now = new Date();
var nowHour = now.getHours();

if (document.getElementById("my-work-link")) {
  document.getElementById("my-work-link").addEventListener("click", () => {
    document.getElementById("my-work-section").scrollIntoView({behavior: "smooth"})
  })
}

if (nowHour >= 18 || nowHour < 8) {
  const body = document.body;
  const navTitle = document.querySelector(".nav-title");
  const buttons = document.querySelectorAll(".button");
  
  body.classList.toggle("dark-mode");
  navTitle.classList.toggle("dark-mode");
  
  buttons.forEach(button => {
    button.classList.toggle("dark-mode");
  });
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
  const body = document.body;
  const navTitle = document.querySelector(".nav-title");
  const buttons = document.querySelectorAll(".button");
  
  body.classList.toggle("dark-mode");
  navTitle.classList.toggle("dark-mode");
  
  buttons.forEach(button => {
    button.classList.toggle("dark-mode");
  });
  
  playRandomSound(lightSwitchSounds); 
 
}

//db.transaction(function (tx) { 
//  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)'); 
//  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "foobar")'); 
//  tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")'); 
//});