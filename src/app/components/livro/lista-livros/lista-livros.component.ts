import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LivroInput } from './../LivroInput';
import { LivroService } from './../../../services/livro.service';
import { LivroOutput } from './../livroOutput';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MensagemComponent } from 'src/app/shared/mensagem/mensagem.component';

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
    private formBuilder: FormBuilder,
    public dialog: MatDialog
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
      this.livroService.buscaLivroPorId(idLivro.id).subscribe((livro)=> (this.livroOutput = livro),
        error => {
        this.resposta(`Livro com id ${idLivro.id}  não cadastrado`);
        return of([])
      })

    }
  }

  listaTodos(){
    this.todos = true;
    console.log(this.todos)
    this.livroService.buscaTodosLivros().subscribe((listaLivros)=> (this.livros = listaLivros),
    error => {
      this.resposta(`Erro ao listar Livros`);
      return of([])
    });
  }

  deleta(id:number | undefined){
    this.livroService.deletaLivro(id).subscribe(sucesso =>{
      this.resposta(`Livro deletado com sucesso`);
    },
    error => {
      this.resposta(`Erro ao deletar Livro`);
      return of([])
    });
  }

  resposta(mensagem: string){
    this.dialog.open(MensagemComponent,{
      data: mensagem
    })
  }

}
