import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthPageComponent } from './forth-page.component';

describe('ForthPageComponent', () => {
  let component: ForthPageComponent;
  let fixture: ComponentFixture<ForthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
