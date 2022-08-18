import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraLivroComponent } from './altera-livro.component';

describe('AlteraLivroComponent', () => {
  let component: AlteraLivroComponent;
  let fixture: ComponentFixture<AlteraLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteraLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
