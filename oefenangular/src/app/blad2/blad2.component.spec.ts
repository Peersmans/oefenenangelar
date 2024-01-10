import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blad2Component } from './blad2.component';

describe('Blad2Component', () => {
  let component: Blad2Component;
  let fixture: ComponentFixture<Blad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blad2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Blad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
