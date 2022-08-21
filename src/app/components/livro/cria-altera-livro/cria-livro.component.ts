import { LivroInput } from '../LivroInput';
import { Router } from '@angular/router';
import { LivroService } from '../../../services/livro.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private router: Router
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
      console.log(novoLivro)
      this.livroService.cadastraLivro(novoLivro).subscribe(()=>{
        this.router.navigate(['/livros']);
      },
      (error)=> console.log(error));
   }
  }
}
