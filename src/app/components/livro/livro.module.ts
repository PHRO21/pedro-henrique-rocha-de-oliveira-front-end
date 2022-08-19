import { AlteraLivroComponent } from './altera-livro/altera-livro.component';
import { CriaLivroComponent } from './cria-livro/cria-livro.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletaLivroComponent } from './deleta-livro/deleta-livro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent,
    DeletaLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent
  ]
})
export class LivroModule { }
