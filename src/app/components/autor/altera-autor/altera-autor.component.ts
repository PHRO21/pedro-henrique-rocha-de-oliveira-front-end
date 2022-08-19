import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';
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
    private router: Router
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
      const autorAtualizado = this.cadastroForm.getRawValue() as Autor;
      this.autorService.atualizaAutor(autorAtualizado).subscribe(()=>{
        this.router.navigate(['/autores']);
      },
        (error)=> console.log(error));
    }
  }
}
