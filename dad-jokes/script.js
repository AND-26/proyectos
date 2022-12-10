let button = document.getElementById("jokeBtn");
let caja = document.getElementById('joke')

button.addEventListener("click",writeJoke)
writeJoke()
async function writeJoke() {
  const config = await fetch("https://icanhazdadjoke.com" , {
    headers: {
      Accept: "application/json",
    },
});

  const joke = await config.json();
caja.innerHTML = joke.joke
}