import { MatDialog } from '@angular/material/dialog';
import { MensagemComponent } from './../../../shared/mensagem/mensagem.component';
import { LivroInput } from '../LivroInput';
import { Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-altera-livro',
  templateUrl: './altera-livro.component.html',
  styleUrls: ['./altera-livro.component.css']
})

export class AlteraLivroComponent implements OnInit {

  cadastroForm!: FormGroup;
  autores!: FormArray;
  text = '';

  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      id:[''],
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autores: this.formBuilder.array(['', [Validators.required]]),
    });
  }

  extraiIds():FormGroup{
    return this.formBuilder.group({
      autores:[]
    })
  }

  // adicionaIdsAutores(){
  //   let autoresFormArray = this.cadastroForm.get('autores') as FormArray

  //   this.autores.(Array).forEach(() => {
  //     autoresFormArray.push(this.extraiIds())
  //   });
  //   this.cadastroForm.patchValue(this.autores);
  // }

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
