import { AutorService } from './../../../services/autor.service';
import { of } from 'rxjs';
import { LivroInput } from '../LivroInput';
import { Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MensagemComponent } from 'src/app/shared/mensagem/mensagem.component';
import { MatDialog } from '@angular/material/dialog';
import { Autor } from '../../autor/autor';

@Component({
  selector: 'app-cria-livro',
  templateUrl: './cria-livro.component.html',
  styleUrls: ['./cria-livro.component.css']
})
export class CriaLivroComponent implements OnInit {

  id!: number | null;
  autores: Autor[] = [];
  erroNaRequisicao: string = '';
  mensagemSemAutorCadastrado: string = '';

  cadastroForm!: FormGroup;

  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private autorService: AutorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autoresIds:['', [Validators.required]],
    });
    this.autorService.buscaTodosAutores().subscribe(
      data => {
        if (data.length > 0) {
          this.autores = data;
          this.buscaLivro();
        } else {
          this.mensagemSemAutorCadastrado = 'Cadastre autores primeiramente!';
        }
      },
      error => {
        if (error?.error?.message) {
          this.erroNaRequisicao = error.error.message;
        } else {
          this.erroNaRequisicao = "Ocorreu um erro inesperado. Tem mais tarde, por favor!"
        }
      }
    )
  }

  buscaLivro() {
    if (this.id) {
      this.livroService.buscaLivroPorId(this.id).subscribe(
        data => {
          this.cadastroForm = this.formBuilder.group({
            titulo: [data.titulo, Validators.required],
            anoLancamento: [data.anoLancamento, Validators.required],
            autoresIds: [data.autores.map(autor=>{return autor.id + ''}), Validators.required]
          });
        },
        error => {
          if (error?.error?.message) {
            this.erroNaRequisicao = error.error.message;
          } else {
            this.erroNaRequisicao = "Ocorreu um erro inesperado. Tem mais tarde, por favor!"
          }
        }
      );
    }
  }

  cadastrar() {
    if(this.cadastroForm.valid){
      const novoLivro = this.cadastroForm.getRawValue() as LivroInput;
      this.livroService.cadastraLivro(novoLivro).subscribe(sucesso =>{
        this.resposta("Livro cadastrado com sucesso")
        this.router.navigate(['/livros'])
      },
        error => {
          this.resposta("Erro ao Cadastrar Livro");
        })
    }
  }

  resposta(mensagem: string){
    this.dialog.open(MensagemComponent,{
      data: mensagem
    })
  }
}
