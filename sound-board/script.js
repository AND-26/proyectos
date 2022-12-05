let btn = document.getElementById("sonido");
const song = new Audio(
  "https://sound-effects-media.bbcrewind.co.uk/mp3/07070171.mp3?download&rename=BBC_Clocks--St_07070171"
);

btn.addEventListener("click", () => {
  song.play();
  song1.pause();
  song3.pause();
  song4.pause();
  song2.pause();
});
////

let btn1 = document.getElementById("sonido1");
const song1 = new Audio(
  "https://sound-effects-media.bbcrewind.co.uk/mp3/07070117.mp3?download&rename=BBC_Telephones_07070117"
);

btn1.addEventListener("click", () => {
  song1.play();
  song.pause();
  song3.pause();
  song4.pause();
  song2.pause();
});
////

let btn2 = document.getElementById("sonido2");
const song2 = new Audio(
  "https://sound-effects-media.bbcrewind.co.uk/mp3/07000126.mp3?download&rename=BBC_Aircraft--_07000126"
);

btn2.addEventListener("click", () => {
  song2.play();
  song1.pause();
  song.pause();
  song3.pause();
  song4.pause();
});

////

let btn3 = document.getElementById("sonido3");
const song3 = new Audio(
  "https://sound-effects-media.bbcrewind.co.uk/mp3/NHU1384-12.mp3?download&rename=BBC__NHU1384-12"
);

btn3.addEventListener("click", () => {
  song.pause();
  song2.pause();
  song1.pause();
  song3.play();
  song4.pause();
});

////

let btn4 = document.getElementById("sonido4");
const song4 = new Audio(
  "https://sound-effects-media.bbcrewind.co.uk/mp3/07011194.mp3?download&rename=BBC_Cats---A-k_07011194"
);

btn4.addEventListener("click", () => {
  song.pause();
  song2.pause();
  song1.pause();
  song3.pause();
  song4.play();
});
