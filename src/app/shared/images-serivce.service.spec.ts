import { TestBed } from '@angular/core/testing';

import { ImagesSerivceService } from './images-serivce.service';

describe('ImagesSerivceService', () => {
  let service: ImagesSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
