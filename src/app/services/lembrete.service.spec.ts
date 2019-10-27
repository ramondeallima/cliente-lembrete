import { TestBed } from '@angular/core/testing';

import { LembreteService } from './lembrete.service';

describe('LembreteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LembreteService = TestBed.get(LembreteService);
    expect(service).toBeTruthy();
  });
});
