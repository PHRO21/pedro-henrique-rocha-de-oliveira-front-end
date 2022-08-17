import { AlteraLivroComponent } from './altera-livro/altera-livro.component';
import { CriaLivroComponent } from './cria-livro/cria-livro.component';
import { ListaLivrosComponent } from './lista-livros/lista-livros.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent
  ],
  imports: [
    CommonModule,
    CommonModule
  ],
  exports:[
    ListaLivrosComponent,
    CriaLivroComponent,
    AlteraLivroComponent
  ]
})
export class LivroModule { }
