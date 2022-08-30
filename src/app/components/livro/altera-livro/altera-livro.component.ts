import { MatDialog } from '@angular/material/dialog';
import { MensagemComponent } from './../../../shared/mensagem/mensagem.component';
import { LivroInput } from '../LivroInput';
import { Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../../autor/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-altera-livro',
  templateUrl: './altera-livro.component.html',
  styleUrls: ['./altera-livro.component.css']
})

export class AlteraLivroComponent implements OnInit {

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
      id:[''],
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autoresIds: ['', [Validators.required]],
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


  alterar() {
    if(this.cadastroForm.valid){
      const livroAtualizado = this.cadastroForm.getRawValue() as LivroInput;
      this.livroService.atualizaLivro(livroAtualizado).subscribe(sucesso =>{
        this.resposta("Livro alterado com sucesso")
        this.router.navigate(['/livros'])
      },
        error => {
          this.resposta("Ocorreu um erro ao alterar livro, tente novamente");
        })
    }
  }

  resposta(mensagem: string){
    this.dialog.open(MensagemComponent,{
      data: mensagem
    })
  }
}
