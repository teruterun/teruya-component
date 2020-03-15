import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeruyaComponentComponent } from './teruya-component.component';

describe('TeruyaComponentComponent', () => {
  let component: TeruyaComponentComponent;
  let fixture: ComponentFixture<TeruyaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeruyaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeruyaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
