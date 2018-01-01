function add() {
  //tenemos que tomar el texto ingresado en el textarea
  var comments = document.getElementById('comment').value;

  //limpiar el textarea
  document.getElementById('comment').value = '';

  //contenedor que esta en el html
  var com = document.getElementById('com');

  //creamos el div que contiene cada comentario
  var newComments = document.createElement('div');

  //validar que textarea tenga un mensaje
  if (comments.length == 0 || comments == null) {
    alert('Debes ingresar un mensaje');
    return false;
  }

  //nodos de texto del textarea
  var textNewComment = document.createTextNode(comments);

  var contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewComment);

  newComments.appendChild(contenedorElemento);

  com.appendChild(newComments);

}

//cuenta los caracteres del textarea
var characterCounter = document.getElementById("comment");
characterCounter.addEventListener("keydown", contador);

//funcion que cuenta los caracteres de forma regresiva
function contador() {
  var contador = document.getElementById("contador");
  var comment = document.getElementById("comment").value;
  var caracteres = comment.length;
  contador.innerHTML = 140 - caracteres;
  //desactiva el botón cuando se pasan los 140 caracteres
  if (comment.length > 140 || comment == null) {
    btn.disabled = true;
  } else {
    return btn.disabled = false;
  }
//cambia el color del contador si pasan los 120 caracteres
  if (caracteres > 120) {
    contador.style.color = '#ff9d28';
  }
//cambia el color del contador si pasan los 130 caracteres
  if (caracteres > 130) {
    contador.style.color = 'red';
  }

}
