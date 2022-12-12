import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstiloPersonalizado1, EstiloPersonalizado2 } from './mis-estilos.directive';

@NgModule({
  declarations: [
    AppComponent,
    EstiloPersonalizado1,
    EstiloPersonalizado2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
