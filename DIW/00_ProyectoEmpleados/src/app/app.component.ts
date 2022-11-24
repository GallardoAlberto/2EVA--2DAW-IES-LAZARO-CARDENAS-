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
  
  arrayEmpleados = Array<Empleado>;

  mariaBeltran = new Empleado("María", "Beltrán", "Directora", 3000);
  martaGonzalez = new Empleado("Marta", "González", "Coordinadora", 2000);
  pedroPerez = new Empleado("Pedro", "Pérez", "Botones", 1500);

  crearEmpleado(nombre : string, apellido : string, cargo : string, salario : number) {
    return new Empleado(nombre, apellido, cargo, salario);
  }

}
