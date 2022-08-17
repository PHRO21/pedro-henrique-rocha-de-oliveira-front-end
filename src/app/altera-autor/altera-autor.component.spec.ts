import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraAutorComponent } from './altera-autor.component';

describe('AlteraAutorComponent', () => {
  let component: AlteraAutorComponent;
  let fixture: ComponentFixture<AlteraAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteraAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
