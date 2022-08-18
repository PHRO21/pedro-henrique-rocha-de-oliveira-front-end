import { AlteraAutorComponent } from './altera-autor/altera-autor.component';
import { CriaAutoresComponent } from './cria-autores/cria-autores.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent
  ]
})
export class AutorModule { }
