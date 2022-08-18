import { AlteraAutorComponent } from './altera-autor/altera-autor.component';
import { CriaAutoresComponent } from './cria-autores/cria-autores.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLivrosAutorComponent } from './lista-livros-autor/lista-livros-autor.component';



@NgModule({
  declarations: [
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent,
    ListaLivrosAutorComponent
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
