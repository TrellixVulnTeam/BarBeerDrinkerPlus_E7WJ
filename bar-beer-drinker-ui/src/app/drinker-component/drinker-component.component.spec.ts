import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerComponentComponent } from './drinker-component.component';

describe('DrinkerComponentComponent', () => {
  let component: DrinkerComponentComponent;
  let fixture: ComponentFixture<DrinkerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
