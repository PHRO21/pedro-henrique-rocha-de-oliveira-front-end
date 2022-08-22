import { LivroInput } from './../components/livro/LivroInput';
import { LivroOutput } from './../components/livro/livroOutput';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.API

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  cadastraLivro(livro:LivroInput):Observable<LivroInput>{
    return this.http.post<LivroInput>(`${API}/livros`, livro);
  }

  atualizaLivro(livro:LivroInput):Observable<LivroInput>{
    return this.http.put<LivroInput>(`${API}/livros/${livro.id}`, livro)
  }

  buscaTodosLivros():Observable<LivroOutput[]>{
    return this.http.get<LivroOutput[]>(`${API}/livros`);
  }

  buscaLivroPorId(id: number | undefined):Observable<LivroOutput>{
    return this.http.get<LivroOutput>(`${API}/livros/${id}`)
  }

  deletaLivro(id: number | undefined):Observable<LivroOutput>{
    return this.http.delete<LivroOutput>(`${API}/livros/${id}`);
  }
}
