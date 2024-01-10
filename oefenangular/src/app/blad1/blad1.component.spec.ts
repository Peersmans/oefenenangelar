import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blad1Component } from './blad1.component';

describe('Blad1Component', () => {
  let component: Blad1Component;
  let fixture: ComponentFixture<Blad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blad1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
