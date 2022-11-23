let btn_bar = document.getElementById('open')
let btn_x = document.getElementById('close')
let circulo = document.querySelector('.circulo')
let container = document.querySelector('.container')
let li1 = document.getElementById('primero')
let li2 = document.getElementById('segundo')
let li3 = document.getElementById('tercero')






btn_bar.addEventListener('click',function(){

circulo.classList.add('rodar')
circulo.classList.remove('rodar-al-reves')
container.classList.add('container-rotate')

li1.classList.add('li1-entrada')
li1.classList.remove('li-salida1')

li2.classList.add('li2-entrada')
li2.classList.remove('li2-salida')



li3.classList.add('li3-entrada')
li3.classList.remove('li3-salida')




})


btn_x.addEventListener('click',function(){
circulo.classList.add('rodar-al-reves')
circulo.classList.remove('rodar')
container.classList.toggle('container-rotate')

li1.classList.add('li-salida1')
li1.classList.remove('li1-entrada')

li2.classList.add('li2-salida')
li2.classList.remove('li2-entrada')

li3.classList.add('li3-salida')
li3.classList.remove('li3-entrada')








})