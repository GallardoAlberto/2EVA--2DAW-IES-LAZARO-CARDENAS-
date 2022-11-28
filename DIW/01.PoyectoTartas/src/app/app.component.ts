import { Component } from '@angular/core';
import { Tarta } from './modelos/tarta.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01.PoyectoTartas';

  tartas : Array<Tarta> = new Array();

  nuevaTarta(nombre : string, sabor : string, intolerancia : string, caloriasRacion : string, precio : string, numPorciones : string){
    let newTarta = new Tarta(nombre, sabor, intolerancia, caloriasRacion, precio, numPorciones);
    this.tartas.push(newTarta);
  }

  mostrarFiltro(intolerancia : string){
    for
  }

}
