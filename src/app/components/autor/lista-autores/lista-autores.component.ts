import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AutorService } from './../../../services/autor.service';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemComponent } from 'src/app/shared/mensagem/mensagem.component';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css'],
})
export class ListaAutoresComponent implements OnInit {
  cadastroForm!: FormGroup;
  autores: Autor[] = [];
  autorEncontrado!: Autor;
  todos:boolean = true;


  constructor(
    private autorService: AutorService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listaTodos();
    this.cadastroForm = this.formBuilder.group({
      id: ['', [Validators.required]]
    });
  }

  listaTodos() {
    this.todos = true;
    this.autorService
      .buscaTodosAutores()
      .subscribe((autores) => (this.autores = autores),
      error => {
        this.resposta(`Erro ao carregar autores`);
        return of([])
      });
  }

  buscaAutorPorId() {
    this.todos = false;
    if (this.cadastroForm.valid) {
      const autor = this.cadastroForm.getRawValue() as Autor;
      this.autorService
        .buscaAutorPorId(autor.id)
        .subscribe((autorBuscado) => (this.autorEncontrado = autorBuscado),
        error => {
          this.resposta(`Autor com o id ${autor.id} não existe`);
          return of([])
        });
    }
  }

  resposta(mensagem: string){
    this.dialog.open(MensagemComponent,{
      data: mensagem
    })
  }
}
