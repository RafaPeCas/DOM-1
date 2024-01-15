//aquí en el ejercicio 16 he pensado que al pedir un carrousel este mini proyecto que hice el trimestre pasado podría servir
//como lo hice el año pasado no están muy bien implementados los usos del dom, pero como funciona y es algo que hice
//yo por mi cuenta de forma libre he pensado que mejor dejarlo tal cual está

//aunque esté dividido en muchas carpetas es solamente 1 index 1 js y 1 css, pero tambien añadí los gifs, el filtro, el marco de la tv
//y demás ya que era una página independiente/experimento

//esta función lo que hace es cambiar el estado de la tv de "apagado" a "encendido"
function cambiar() {
    //se ejecuta con el boton de apagar y encender

    //si la television está apagada la enciende
    if (onOff.classList.contains('off')) {
        //la clase off lo que hace es poner el boton de color rojo, en este caso lo quito
        onOff.classList.remove('off');
        //para poner el fondo en color verde al estar encendido
        onOff.classList.add('on');
        //esto lo que hace es mostrar las flecha para cambiar de imagen
        derecha.classList.remove("oculto");
        izquierda.classList.remove("oculto");
        //esto lo que hace es añadir un filto de ruido para las imágenes de la tv
        filtro.classList.remove("oculto");
    } else {
        //esto hace lo mismo que todo lo anterior pero al reves para "apagar" la tv
        onOff.classList.remove('on');
        onOff.classList.add('off');
        derecha.classList.add("oculto");
        izquierda.classList.add("oculto");
        filtro.classList.add("oculto");
    }

    //esto lo que hace es comprobar el estado de tv y lo oculta o muestra
    //ahora que lo sé lo habría hecho con attribute hidden, pero el resultado es el mismo
    if(tv.classList.contains("oculto")){
        tv.classList.remove("oculto");
    }else{
        tv.classList.add("oculto")
    }

    //esto hace que al pulsar el boton de encender/apagar suene un ruido
    telesound.play();

};

//i va a servir para saber que imagen se va a mostrar dentro del array
let i=0;
function canales(movimiento){
    //aquí lo que hago es cambiar de imagen usando este array
    let imagenes = ["img/bort.gif", "img/busto.gif", "img/guga.gif", "img/homer.gif", "img/venus.gif"];
    //si pulso una flecha resta y si pulso la otra suma, entonces me muevo por el array sumando y restando
    //de 1 en 1 posiciones del array para mostrar la foto
    i+=movimiento;
    //este if lo que hace es que si te pasas de los margenes del array vuelve el indice a ser 0
    if (i>imagenes.length-1) i=0;
    //este if hace lo mismo pero por el otro lado, esto está pensado para poder cambiar de canal
    //de forma infinita tanto dandole para alante como dandole para atrás
    if (i<0) i= imagenes.length-1;
    //esto lo que hace es cambiar la ruta de la imagen que sería el canal de la tele por la imagen siguiente
    tv.src= imagenes[i];
    //esto lo que haces es reproducir un sonido al cambiar de canal
    nextsound.play();
}