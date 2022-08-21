import { LivroOutput } from '../components/livro/livroOutput';
import { Autor } from './../components/autor/autor';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  cadastraAutor(autor:Autor):Observable<Autor>{
    return this.http.post<Autor>(`${API}/autores`, autor);
  }

  atualizaAutor(autor:Autor):Observable<Autor>{
    return this.http.put<Autor>(`${API}/autores/${autor.id}`, autor)
  }

  buscaTodosAutores():Observable<Autor[]>{
    return this.http.get<Autor[]>(`${API}/autores`);
  }

  buscaAutorPorId(id:number|undefined):Observable<Autor>{
    return this.http.get<Autor>(`${API}/autores/${id}`)
  }

  buscaLivrosDoAutor(id:number|undefined):Observable<LivroOutput[]>{
    return this.http.get<LivroOutput[]>(`${API}/autores/${id}/livros`);
  }
}
