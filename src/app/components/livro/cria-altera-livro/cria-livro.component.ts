import { of } from 'rxjs';
import { LivroInput } from '../LivroInput';
import { Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MensagemComponent } from 'src/app/shared/mensagem/mensagem.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cria-livro',
  templateUrl: './cria-livro.component.html',
  styleUrls: ['./cria-livro.component.css']
})
export class CriaLivroComponent implements OnInit {

  cadastroForm!: FormGroup;
  autores!: FormArray;

  constructor(
    private livroService: LivroService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
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

  cadastrar() {
    if(this.cadastroForm.valid){
      const novoLivro = this.cadastroForm.getRawValue() as LivroInput;
      this.livroService.cadastraLivro(novoLivro).subscribe(sucesso =>{
        this.resposta("Livro cadastrado com sucesso")
        this.router.navigate(['/autores'])
      },
        error => {
          this.resposta("Erro ao Cadastrar Livro");
          return of([])
        })
    }
  }

  resposta(mensagem: string){
    this.dialog.open(MensagemComponent,{
      data: mensagem
    })
  }
}
