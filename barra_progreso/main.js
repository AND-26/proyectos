let next = document.getElementById('next')
let circle = document.querySelectorAll('.circle')
let prev = document.getElementById('prev')
let line = document.querySelectorAll('.line')

let value = 1;
let line_value = 0

function updateProgres(){

if(value == 1 ){
prev.setAttribute('disabled', true)
}else if(value > 1){
prev.removeAttribute('disabled')
}
}

next.addEventListener('click',function(){
    circle[value].classList.add('active')
    line[line_value].classList.add('active')
    line_value++
    value++
    updateProgres()
    console.log(value);

})

prev.addEventListener('click',function(){
    value --
    line_value --
    circle[value].classList.remove('active')
    line[line_value].classList.remove('active')
    updateProgres()
})
