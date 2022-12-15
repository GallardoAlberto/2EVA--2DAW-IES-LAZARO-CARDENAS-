let caja1 = document.getElementById('arrastrar');
let caja2 = document.getElementById('destino');

caja2.addEventListener('dragover', (event) =>{
    event.preventDefault();
})

caja2.addEventListener('drop', (event)=>{
    caja2.appendChild(caja1);
    caja1.style.margin = '0px';
})
