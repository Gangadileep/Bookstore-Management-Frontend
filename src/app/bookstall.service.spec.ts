import { TestBed } from '@angular/core/testing';

import { BookstallService } from './bookstall.service';

describe('BookstallService', () => {
  let service: BookstallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
