import { MensagemComponent } from './../../../shared/mensagem/mensagem.component';
import { AutorService } from './../../../services/autor.service';
import { Autor } from './../autor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-cria-autores',
  templateUrl: './cria-autores.component.html',
  styleUrls: ['./cria-autores.component.css'],
})
export class CriaAutoresComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private autorService: AutorService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]],
    });
  }
  cadastrar() {
    if(this.cadastroForm.valid){
      const novoAutor = this.cadastroForm.getRawValue() as Autor;
      this.autorService.cadastraAutor(novoAutor).subscribe(sucesso =>{
        this.resposta("Autor cadastrado com sucesso")
        this.router.navigate(['/autores'])
      },
        error => {
          this.resposta("Erro ao Cadastrar Autor");
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
