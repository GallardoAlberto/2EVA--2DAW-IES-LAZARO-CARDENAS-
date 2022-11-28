export class Tarta{
    public nombre : string;
    public sabor : string;
    public intolerancia : string;
    public caloriasRacion : string;
    public precio : string;
    public numPorciones : string

    constructor (nombre : string,sabor : string,intolerancia : string,caloriasRacion : string,precio : string,numPorciones : string){
        this.nombre = nombre;
        this.sabor = sabor;
        this.intolerancia = intolerancia;
        this.caloriasRacion = caloriasRacion;
        this.precio = precio;
        this.numPorciones = numPorciones;
    }
}

