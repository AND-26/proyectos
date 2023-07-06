let toggle = document.getElementById('toggle')

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('move')
    toggle.firstElementChild.classList.toggle('efect_line_first')
    toggle.lastElementChild.classList.toggle('efect_line_second')
    toggle.parentElement.classList.toggle('nav_small')
    toggle.previousElementSibling.querySelectorAll('li').forEach(li => {
        li.classList.toggle('li_rotate')
    })

    
})

console.log('%cHola mundo', 'color: skyblue ; font-size: 1rem')