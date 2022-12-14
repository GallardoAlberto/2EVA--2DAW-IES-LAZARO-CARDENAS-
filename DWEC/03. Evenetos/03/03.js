let contenedor = document.getElementById('container');
contenedor.addEventListener('mouseenter', (event) => {
    contenedor.style.backgroundColor = 'green';
})

contenedor.addEventListener('mouseout', (event) => {
    contenedor.style.backgroundColor = 'white';
})

contenedor.addEventListener('mouseup')