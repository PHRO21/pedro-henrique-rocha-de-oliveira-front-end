import { LivroInput } from './../LivroInput';
import { LivroService } from './../../../services/livro.service';
import { LivroOutput } from './../livroOutput';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  cadastroForm!: FormGroup;
  livros: LivroOutput[] = [];
  livroOutput!: LivroOutput;
  livroInput!:LivroInput;
  todos:boolean = true;


  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listaTodos();
    this.cadastroForm = this.formBuilder.group({
      id: ['',[Validators.required]]
    });
  }

  buscaLivroPorId() {
    this.todos = false;
    console.log(this.todos)
    if (this.cadastroForm.valid) {
      const idLivro = this.cadastroForm.getRawValue() as LivroInput;
      this.livroService.buscaLivroPorId(idLivro.id).subscribe((livro)=> (this.livroOutput = livro));
    }
  }

  listaTodos(){
    this.todos = true;
    console.log(this.todos)
    this.livroService.buscaTodosLivros().subscribe((listaLivros)=> (this.livros = listaLivros));
  }

  deleta(id:number | undefined){
    this.livroService.deletaLivro(id);
  }
}
