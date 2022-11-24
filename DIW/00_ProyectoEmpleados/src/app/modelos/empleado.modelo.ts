export class Empleado {
    public nombre: string;
    public apellido: string;
    public cargo: string;
    public salario: number;
    
constructor (nombre: string, apellido: string, cargo: string, salario: number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
    }
}