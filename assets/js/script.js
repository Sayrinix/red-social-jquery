 
//Transformación a Jquery.

    let valorInput = $('#escribir');
    let contenedor = $('#comentarios');
    let botonEnviar = $('#boton');

    botonEnviar.click(function(event){
       event.preventDefault();

        if (valorInput.val() !== ''){
            //Agregar nickname... 
            let nombre = prompt('Ingresa tu nickname');
            let contenedorNombre = $('<span>').text(nombre + ' bloomió: ');
            contenedorNombre.css({'fontWeight': '700'});
            contenedor.append(contenedorNombre);
            //Agregar comentario...
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

