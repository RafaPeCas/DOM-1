"use strict"

//creo los parámetros que va a tener la notificacion, en este caso
//van a ser top, right, el contenido que es Hello y la clase que va a ser
//welcome, como bien señala la profesora en el enunciado
showNotification({
    top: 10,
    right: 10,
    html: "Hello",
    className: "welcome"
});


function showNotification({ top = 0, right = 0, html, className }) {
    //creo una variable con la etiqueta de la notificacion
    let notification = document.createElement('div');

    //le añado las 2 clases proporcionadas por la docente, una en forma de objeto,
    //ya que es recibida por los parametros de la funcion
    notification.classList.add(className);
    notification.classList.add("notification")

    //le doy los estilos según han sido introducidos por los parametros, que serian la distancia
    //con los bordes superior y derecho de la ventana
    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    //Le doy a la notificación el texto introducido por los parametros como la variable
    //html
    notification.innerHTML = html;
    //inserto la etiqueta creada dentro del body
    document.body.append(notification);

    //le digo que se borre pasados 1500ms , que es lo mismo que 1.5s
    setTimeout(() => notification.remove(), 1500);
}
