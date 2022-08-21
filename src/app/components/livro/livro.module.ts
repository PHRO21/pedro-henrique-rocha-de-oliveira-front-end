import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../../shared/mensagem/mensagem.module';
import { CriaLivroComponent } from './cria-altera-livro/cria-livro.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlteraLivroComponent } from './altera-livro/altera-livro.component';

@NgModule({
  declarations: [
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent,
  ],
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent,
  ]
})
export class LivroModule { }
