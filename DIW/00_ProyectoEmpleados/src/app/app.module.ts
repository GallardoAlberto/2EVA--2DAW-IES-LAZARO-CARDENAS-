import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstiloPersonalizado1, EstiloPersonalizado2 } from './mis-estilos.directive';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { CaracEmpComponent } from './carac-emp/carac-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EstiloPersonalizado1,
    EstiloPersonalizado2,
    ComponenteHijoComponent,
    CaracEmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
