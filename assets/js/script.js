/*

//Mostrar valor del formulario en los comentarios

let valorInput = document.getElementById('escribir');
let contenedor = document.getElementById('comentarios');
let botonEnviar = document.getElementById('boton');

botonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    
    if(valorInput.value !== ''){

    let nuevoComentario = document.createElement('li');
    nuevoComentario.textContent = valorInput.value
    contenedor.appendChild(nuevoComentario);
    valorInput.value = ''
    nuevoComentario.style.listStyleType = 'none';
    nuevoComentario.style.margin = '5px';
    nuevoComentario.style.borderTop = '1px solid #f9b4c8';
    nuevoComentario.style.borderBottom = '1px solid #f9b4c8';
    nuevoComentario.style.padding = '10px';
    }else{
        alert('Tu comentario está vacío. Intenta otra vez.')
    }
    
})

//Toggle al apretar el boton de comentarios

    let botonComentar = document.getElementById('comentar');
    let contenedorComentar = document.getElementById('seccionComentarios');
    

    contenedorComentar.style.display = 'none';

    botonComentar.addEventListener('click', function(event){
        event.preventDefault();

        if(contenedorComentar.style.display == 'none'){

            contenedorComentar.style.display = 'block';
        } else{
            contenedorComentar.style.display = 'none';
        }

    })


    
    

    //Hover para los iconos, esta manera es mas larga porque se va uno por uno,

    //Boton comentar
    let botonComment = document.getElementById('comentar');
    let icon3 = document.getElementById('icono3');

    botonComment.addEventListener('mouseover', function(){
        icon3.style.color = '#ff2969';
    })

    botonComment.addEventListener('mouseout', function(){
        icon3.style.color = '#f9b4c8';
    })

    //Boton de like
    let botonLike = document.getElementById('boton2');
    let icono1 = document.getElementById('icono');

    botonLike.addEventListener('mouseover', function(){
        icono1.style.color = '#ff2969';
    })

    botonLike.addEventListener('mouseout', function(){
        icono1.style.color = '#f9b4c8';
    })
    
    //Boton de compartir
    let botonShare = document.getElementById('boton3');
    let icon2 = document.getElementById('icono2');

    botonShare.addEventListener('mouseover', function(){
        icon2.style.color = '#ff2969';
    })

    botonShare.addEventListener('mouseout', function(){
        icon2.style.color = '#f9b4c8';
    })

    


//Nueva forma de darle un hover a TODOS los iconos y no ir uno por uno.

let enlaces = document.getElementsByTagName('a');

for (let i = 0; i < enlaces.length; i++) {
  let enlace = enlaces[i];
  
  let iconos = enlace.getElementsByTagName('i');
  
  for (let j = 0; j < iconos.length; j++) {
    let icono = iconos[j];
    
    enlace.addEventListener('mouseover', function() {
      icono.style.color = '#ff2969';  
    });

    enlace.addEventListener('mouseout', function() {
      icono.style.color = '#ff81a5';  
    });
  }
}

*/  

//Transformación a Jquery.

    let valorInput = $('#escribir');
    let contenedor = $('#comentarios');
    let botonEnviar = $('#boton');

    botonEnviar.click(function(event){
       event.preventDefault();

        if (valorInput.val() !== ''){
            let nuevoComentario = $('<li>').text(valorInput.val());
            contenedor.append(nuevoComentario)
            valorInput.val('')
            nuevoComentario.css({'listStyleType': 'none', 'margin': '5px', 'borderTop': '1px solid #f9b4c8', 'borderBottom': '1px solid #f9b4c8', 'padding': '10px'})
            }else{
                alert('Tu comentario está vacío. Intenta otra vez.')
            }
    })

    //Toggle para la sección comentarios.

    let botonComentar = $('#comentar');
    let contenedorComentar = $('#seccionComentarios');

    contenedorComentar.hide();

    botonComentar.click(function(event){
        event.preventDefault();
        contenedorComentar.toggle();
    })

    //Hover para todos los iconos...
    
    $('a').each(function() {
        let enlace = $(this);
      
        enlace.find('i').each(function() {
          let icono = $(this);
      
          enlace.mouseover(function() {
            icono.css('color', '#ff2969');
          });
      
          enlace.mouseout(function() {
            icono.css('color', '#ff81a5');
          });
        });
      });

