/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LangueService } from './langue.service';

describe('Service: Langue', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LangueService]
    });
  });

  it('should ...', inject([LangueService], (service: LangueService) => {
    expect(service).toBeTruthy();
  }));
});
