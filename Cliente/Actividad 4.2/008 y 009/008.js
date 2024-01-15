"use strict"


//He hecho el 8 con funcionalidad y luego he leido que el nueve era darle funcionalidad, así
//que los dejo aqui los 2 como si solo fueran 1

//aquí ya he metido css porque de otra forma era horrible

//hago un array con todos los elementos div existentes que esten dentro de una etiqueta con la clase container
//Esto lo hago para luego con css poder ordenar mejor los elementos y que quede más estético
let containers = document.querySelectorAll('.container div');

//Los recorro y les añado un boton para borrarlos
for(let container of containers) {
  container.insertAdjacentHTML("afterbegin", '<div class="cross">>X<</div>');
  //cuando pulsas el boton lo que hace es eliminar al elemento padre de donde está la X, ya que sería el container
  container.firstChild.onclick = () => container.parentElement.remove();
}