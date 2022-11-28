const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const section = document.querySelector('.bg-filter')

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
bg.classList.add('bg-opaciti')
  load++;
  if (load > 99) {
    clearInterval(int);
    loadText.classList.add('tex-invisible')
  }
  loadText.innerText = `${load}%`;


}

