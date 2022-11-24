let newParrafo = document.createElement('p');
let contenido = document.createTextNode("Hola Gatito");

let pieDePag = document.getElementById('main-footer');
newParrafo.appendChild(contenido);

let articulo = document.getElementById('articulo');
articulo.appendChild(newParrafo);

let contenido1 = document.createTextNode(`Hola Mundo`);
let bolder = document.createElement('b');
// bolder.appendChild();
articulo.appendChild(contenido1);
