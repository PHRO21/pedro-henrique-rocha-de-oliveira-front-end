import { ListaLivrosAutorComponent } from './components/autor/lista-livros-autor/lista-livros-autor.component';
import { AlteraLivroComponent } from './components/livro/altera-livro/altera-livro.component';
import { CriaLivroComponent } from './components/livro/cria-altera-livro/cria-livro.component';
import { AlteraAutorComponent } from './components/autor/altera-autor/altera-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriaAutoresComponent } from './components/autor/cria-autores/cria-autores.component';
import { ListaAutoresComponent } from './components/autor/lista-autores/lista-autores.component';
import { ListaLivrosComponent } from './components/livro/lista-livros/lista-livros.component';

const routes: Routes = [
  {
    path:"",
    component:ListaAutoresComponent
  },
  {
    path:"autores",
    component:ListaAutoresComponent
  },
  {
    path:"autores/cadastra",
    component:CriaAutoresComponent
  },
  {
    path:"autores/altera",
    component:AlteraAutorComponent
  },
  {
    path:"autores/livros",
    component:ListaLivrosAutorComponent
  },
  {
    path:"livros",
    component:ListaLivrosComponent
  },
  {
    path:"livros/cadastra",
    component:CriaLivroComponent
  },
  {
    path:"livros/altera",
    component:AlteraLivroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
