let titulo_img = document.querySelectorAll('h3')
console.log(titulo_img);
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click',function(){
      removeClasses();
      panel.classList.add('active');
      panel.classList.add('imagen_estilo')

      const time = setTimeout(() => {
     let letra =  panel.firstElementChild.classList.add('h3_visibility')
        
      }, 1000);
      
  });
});


function removeClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
    panel.classList.remove('imagen_estilo')

    titulo_img.forEach((title) =>{
      title.classList.remove('h3_visibility')
    })
    
  
    
  });

}