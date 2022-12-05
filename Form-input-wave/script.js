let inpu_email = document.getElementById("inpuEm");
let lb_email = document.querySelectorAll("#lbemail > span");
/////////
let inpu_pass = document.getElementById("inpupas");
let lb_pass = document.querySelectorAll("#password > span");



inpu_email.addEventListener('focus', () => {
  for (let i = 0; i < lb_email.length; i++) {
    lb_email[i].classList.add("movimiento");
  }
});

inpu_email.addEventListener('focusout', () => {
  for (let i = 0; i < lb_email.length; i++) {
    lb_email[i].classList.remove("movimiento");
  }
});

//////////

inpu_pass.addEventListener('focus', () => {
  for (let i = 0; i < lb_pass.length; i++) {
    lb_pass[i].classList.add("movimiento");
  }
});

inpu_pass.addEventListener('focusout', () => {
  for (let i = 0; i < lb_pass.length; i++) {
    lb_pass[i].classList.remove("movimiento");
  }
});

