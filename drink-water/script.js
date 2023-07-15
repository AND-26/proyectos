let glass = document.querySelectorAll('.glass')


/* efectos click*/

glass[7].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '100%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '100%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '0%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = ''
})


glass[6].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '87.5%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '87.5%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '12.5%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '0.25 L'
})


glass[5].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '75%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '75%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '25%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '0.5 L'
})

glass[4].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '62.5%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '62.5%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '37.5%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '0.75 L'
})

glass[3].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '50%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '50%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '50%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '1 L'
})

glass[2].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '37.5%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '37.5%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '62.5%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '1.25 L'
})

glass[1].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '25%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '25%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '75%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '1.5 L'
})


glass[0].addEventListener('click',() => {
    let text = document.getElementById('bottle__text')
    text.innerText = '12.5%'
    let bottle = document.getElementById('bottle__blue')
    bottle.style.height = '12.5%'
    let bottleWhite = document.getElementById('bottle__white')
    bottleWhite.style.height = '87.5%'
    let bottleBig = document.getElementById('botlle__text-white')
    bottleBig.innerText = '1.75 L'
})



/* efectos mouseover */
glass[7].addEventListener('mouseover',() => {
    for (let i = 7; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[6].addEventListener('mouseover',() => {
    for (let i = 6; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[5].addEventListener('mouseover',() => {
    for (let i = 5; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[4].addEventListener('mouseover',() => {
    for (let i = 4; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[3].addEventListener('mouseover',() => {
    for (let i = 3; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[2].addEventListener('mouseover',() => {
    for (let i = 2; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[1].addEventListener('mouseover',() => {
    for (let i = 1; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})

glass[0].addEventListener('mouseover',() => {
    for (let i = 0; i < glass.length; i--) {
        glass[i].classList.add('azul')
    }
})





/* efectos mouseout */
glass[7].addEventListener('mouseout',() => {
    for (let i = 7; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[6].addEventListener('mouseout',() => {
    for (let i = 6; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[5].addEventListener('mouseout',() => {
    for (let i = 5; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[4].addEventListener('mouseout',() => {
    for (let i = 4; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[3].addEventListener('mouseout',() => {
    for (let i = 3; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[2].addEventListener('mouseout',() => {
    for (let i = 2; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[1].addEventListener('mouseout',() => {
    for (let i = 1; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})

glass[0].addEventListener('mouseout',() => {
    for (let i = 0; i < glass.length; i--) {
        glass[i].classList.remove('azul')
    }
})