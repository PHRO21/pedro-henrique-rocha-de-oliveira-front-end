/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MensagensService } from './mensagens.service';

describe('Service: Mensagens', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensagensService]
    });
  });

  it('should ...', inject([MensagensService], (service: MensagensService) => {
    expect(service).toBeTruthy();
  }));
});
