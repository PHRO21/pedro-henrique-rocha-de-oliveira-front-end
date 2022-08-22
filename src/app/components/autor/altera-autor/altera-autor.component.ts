import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AutorService } from 'src/app/services/autor.service';
import { MensagemComponent } from 'src/app/shared/mensagem/mensagem.component';
import { Autor } from '../autor';

@Component({
  selector: 'app-altera-autor',
  templateUrl: './altera-autor.component.html',
  styleUrls: ['./altera-autor.component.css']
})
export class AlteraAutorComponent implements OnInit {
  cadastroForm!: FormGroup;

  constructor(
    private autorService: AutorService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]],
    });
  }
  atualiza() {
    if(this.cadastroForm.valid){
      const novoAutor = this.cadastroForm.getRawValue() as Autor;
      this.autorService.atualizaAutor(novoAutor).subscribe(sucesso =>{
        this.resposta("Autor atualizado com sucesso")
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
