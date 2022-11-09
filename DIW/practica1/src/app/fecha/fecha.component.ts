import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: `<h3>{{fecha}}</h3>`
})
export class FechaComponent {
  fecha : any = new Date();
}
