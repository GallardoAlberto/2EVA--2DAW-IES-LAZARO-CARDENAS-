let alumnos = new Array();
let notas = [];
let mediaNota = [];
let notasAlumno = [alumnos.length][notas.length];

let eva1, eva2, eva3;
function calcularMedia(){
    return Math.round((eva1 + eva2 + eva3) / 3);
}

function notaL(){
    if(calcularMedia() == 10 || calcularMedia() == 9){
        return "SB";
    }
    if(calcularMedia() == 8 || calcularMedia() == 7){
        return "NT";
    }
    if(calcularMedia() == 6){
        return "BI";
    }
    if(calcularMedia() == 4){
        return "IN";
    }
    if(calcularMedia() < 4){
        return "MD";
    }
}

do{

    let alumno = prompt("Nombre alumno: ");
    alumnos.push(alumno);

    eva1 = Number(prompt("Nota 1ª EVA:"));

    while(eva1 > 10 || eva1 < 1 || !Number(eva1)){
        eva1 = Number(prompt("Introduce un número de 1 a 10"));
    }

    eva2 = Number(prompt("Nota 2ª EVA:"));

    while(eva2 > 10 || eva2 < 1 || !Number(eva2)){
        eva2 = Number(prompt("Introduce un número de 1 a 10"));
    }


    eva3 = Number(prompt("Nota 3ª EVA:"));

    while(eva3 > 10 || eva3 < 1 || !Number(eva3)){
        eva3 = Number(prompt("Introduce un número de 1 a 10"));
    }

    console.log(calcularMedia());
    calcularMedia();

    let media = {
        alumno : alumno,
        media : calcularMedia()
    };

    mediaNota.push(media);
    
    let eva = {
        EVA1 : eva1,
        EVA2 : eva2,
        EVA3 : eva3
    }

    notas.push(eva);

}while(confirm("Desea continuar?") == null)


console.table(notas);
console.table(mediaNota);