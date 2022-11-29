let left = document.querySelector('.left')
let left_btn = document.querySelector('.split > .btn')
let right = document.querySelector('.right')
left.addEventListener('mouseover',() =>{

    left.classList.add('efecto_grande')
    right.classList.add('efecto_small')

})

left.addEventListener('mouseout',() =>{

    left.classList.remove('efecto_grande')
    left.classList.add('left')
    right.classList.remove('efecto_small')
    right.classList.add('right')

})

right.addEventListener('mouseover',() =>{

    right.classList.add('efecto_grande')
    left.classList.add('efecto_small')


})

right.addEventListener('mouseout',() =>{

    right.classList.remove('efecto_grande')
    right.classList.add('right')
    left.classList.remove('efecto_small')
    left.classList.add('left')

})

