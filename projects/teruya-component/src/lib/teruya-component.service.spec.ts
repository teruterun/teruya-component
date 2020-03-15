import { TestBed } from '@angular/core/testing';

import { TeruyaComponentService } from './teruya-component.service';

describe('TeruyaComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeruyaComponentService = TestBed.get(TeruyaComponentService);
    expect(service).toBeTruthy();
  });
});
