import { TestBed } from '@angular/core/testing';

import { ErrorRestInterceptor } from './error-rest.interceptor';

describe('ErrorRestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorRestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorRestInterceptor = TestBed.inject(ErrorRestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
