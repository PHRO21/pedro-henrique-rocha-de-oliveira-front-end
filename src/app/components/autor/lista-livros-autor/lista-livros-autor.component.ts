import { LivroOutput} from '../../livro/livroOutput';
import { AutorService } from 'src/app/services/autor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';

@Component({
  selector: 'app-lista-livros-autor',
  templateUrl: './lista-livros-autor.component.html',
  styleUrls: ['./lista-livros-autor.component.css'],
})
export class ListaLivrosAutorComponent implements OnInit {
  cadastroForm!: FormGroup;
  livros:LivroOutput[] = [];

  constructor(
    private autorService: AutorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      id: ['', [Validators.required]],
    });
  }

  buscaLivrosPorIdAutor() {
    if (this.cadastroForm.valid) {
      const idAutor = this.cadastroForm.getRawValue() as Autor;
      this.autorService.buscaLivrosDoAutor(idAutor.id).subscribe((livros)=> (this.livros = livros));
    }
  }
}
