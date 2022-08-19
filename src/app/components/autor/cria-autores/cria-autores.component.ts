import { AutorService } from './../../../services/autor.service';
import { Autor } from './../autor';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]],
    });
  }
  enviar() {
    if(this.cadastroForm.valid){
      const novoAutor = this.cadastroForm.getRawValue() as Autor;
      this.autorService.cadastraAutor(novoAutor).subscribe(()=>{
        this.router.navigate(['/autores']);
      },
        (error)=> alert(error));
    }
  }
}
