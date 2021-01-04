
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

const w = document.getElementById("w");
const a = document.getElementById("a");
const s = document.getElementById("s");
const d = document.getElementById("d");
const j = document.getElementById("j");
const k = document.getElementById("k");
const l = document.getElementById("l");

w.addEventListener("click", () => playAudio("./sounds/tom-1.mp3" ));
a.addEventListener("click", () => playAudio("./sounds/tom-2.mp3"));
s.addEventListener("click", () => playAudio("./sounds/tom-3.mp3"));
d.addEventListener("click", () => playAudio("./sounds/tom-4.mp3"));
j.addEventListener("click", () => playAudio("./sounds/snare.mp3"));
k.addEventListener("click", () => playAudio("./sounds/crash.mp3"));
l.addEventListener("click", () => playAudio("./sounds/kick-bass.mp3"));
