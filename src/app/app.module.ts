import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { CriaAutoresComponent } from './cria-autores/cria-autores.component';
import { AlteraAutorComponent } from './altera-autor/altera-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
