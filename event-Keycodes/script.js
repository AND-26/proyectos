
let containerKeys = document.getElementById("containerKeys");

console.log(containerKeys.children[0]);
document.addEventListener("keydown", function (key) {
  containerKeys.children[0].textContent = key.key;
  containerKeys.children[1].textContent = key ? key.keyCode : key.which;
  containerKeys.children[2].textContent = key.code;
  containerKeys.classList.add("visible");
  containerKeys.previousElementSibling.classList.add("invisible");
  containerKeys.parentElement.querySelectorAll("small").forEach((s) => {
    s.classList.add("visible");
  });
});
