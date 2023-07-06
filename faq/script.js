
let caja = document.querySelectorAll(".faq");
let body = document.getElementsByClassName('faq-container')
let btn = document.querySelectorAll(".faq-toggle");``

btn.forEach((cadaBTn, i) => {
  btn[i].classList.add('move')

  btn[i].addEventListener('click', ()=> {
    btn[i].parentElement.classList.toggle('active')
    btn[i].previousElementSibling.classList.toggle('visible')
    btn[i].firstElementChild.classList.toggle('fa-times')
    btn[i].firstElementChild.classList.toggle('cambio')



  })

})


/* 
btn.forEach((cadaBTn, i) => {
  btn[i].addEventListener('click', ()=> {
    caja.forEach((cadaCaja, i) => {
       caja[i].classList.remove('active')
    })
    caja[i].classList.add('active')
  })
}) */