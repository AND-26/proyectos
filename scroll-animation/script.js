const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add('mostrar')
        }else {
            box.classList.remove('mostrar')
        }
    })







    
})
