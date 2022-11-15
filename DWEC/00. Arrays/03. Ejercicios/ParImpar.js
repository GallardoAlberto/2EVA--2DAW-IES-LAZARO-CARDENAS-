numerosRandom = () =>{
    let num;
    let par = 0;
    let impar = 0;
    for (let i = 0; i < 500; i++) {
        num =  Math.random() * 10000 + 1;

        if(num % 2 == 0){
            par++;
            console.log(num + "- par");

        }else{
            impar++;
            console.log(num + "- impar");

        }

        if(par > impar){
            return ("Hay más pares(" + par + ") que impares(" + impar + ")");
        }else{
            return ("Hay más impares(" + impar + ") que pares(" + par + ")");
        }
    }
}

parImpar(numerosRandom()) = () => {
    return numerosRandom();
}

parImpar();