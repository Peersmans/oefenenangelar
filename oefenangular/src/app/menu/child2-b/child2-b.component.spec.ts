import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2BComponent } from './child2-b.component';

describe('Child2BComponent', () => {
  let component: Child2BComponent;
  let fixture: ComponentFixture<Child2BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2BComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
