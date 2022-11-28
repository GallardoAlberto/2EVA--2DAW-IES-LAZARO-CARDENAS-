import { Component } from '@angular/core';
import { Empleado } from './modelos/empleado.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '00_ProyectoEmpleados';

  salario = 0;
  cont = 3;
  parrafo: any;
  mensaje : any;
  datos : any;
  
  mariaBeltran = new Empleado("María", "Beltrán", "Directora", "3000");
  martaGonzalez = new Empleado("Marta", "González", "Coordinadora", "2000");
  pedroPerez = new Empleado("Pedro", "Pérez", "Botones","1500"); 

  empleados : Array<Empleado> = new Array(this.mariaBeltran,this.martaGonzalez,this.pedroPerez);
  apellidosEmpleados : any = [ this.mariaBeltran.apellido, this.martaGonzalez.apellido, this.pedroPerez.apellido];

  crearEmpleado(nombre : string, apellido : string, cargo : string, salario : string) {
    let newEmpleado = new Empleado(nombre, apellido, cargo, salario);
    
    if(this.apellidosEmpleados.includes(apellido) == true){
      alert("Empleado con el mismo apellido, inserta otro");
    }else{
      this.empleados.push(newEmpleado);
      this.apellidosEmpleados.push(apellido);
    }

  }
  


  
  
}
