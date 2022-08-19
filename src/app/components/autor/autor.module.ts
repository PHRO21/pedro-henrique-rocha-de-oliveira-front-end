import { MensagemModule } from './../../shared/mensagem/mensagem.module';
import { AlteraAutorComponent } from './altera-autor/altera-autor.component';
import { CriaAutoresComponent } from './cria-autores/cria-autores.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLivrosAutorComponent } from './lista-livros-autor/lista-livros-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent,
    ListaLivrosAutorComponent
    ],
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ListaAutoresComponent,
    CriaAutoresComponent,
    AlteraAutorComponent
  ]
})
export class AutorModule { }
