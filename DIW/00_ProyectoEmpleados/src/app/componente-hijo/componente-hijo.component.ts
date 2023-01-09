import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../modelos/empleado.modelo';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css'],
})
export class ComponenteHijoComponent implements OnInit {
  @Input() empleado: Empleado;
  @Input() i: number;

  arrayCaract = [''];
  anadirCaract(caract: string) {
    this.arrayCaract.push(caract);
  }

  constructor() {}

  ngOnInit(): void {}
}
