/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestFormService } from './test-form.service';

describe('Service: TestForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestFormService]
    });
  });

  it('should ...', inject([TestFormService], (service: TestFormService) => {
    expect(service).toBeTruthy();
  }));
});
