import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivrosAutorComponent } from './lista-livros-autor.component';

describe('ListaLivrosAutorComponent', () => {
  let component: ListaLivrosAutorComponent;
  let fixture: ComponentFixture<ListaLivrosAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLivrosAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLivrosAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
