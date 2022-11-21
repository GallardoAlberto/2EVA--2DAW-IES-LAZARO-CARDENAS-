import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica3';

  salario = 1500;

  masSueldo() {
      return this.salario = Number((this.salario * 1.05).toFixed(2));
  }

  mayorSueldo(incremento : String){
      return this.salario = this.salario + Number(incremento);
  }

  setColor() {
    return this.salario <= 1500 ? this.salario > 1500 && this.salario < 3000 ? this.salario >= 3000 ? 'black' : 'blue' : 'green';
  }
}
