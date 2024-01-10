import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2AComponent } from './child2-a.component';

describe('Child2AComponent', () => {
  let component: Child2AComponent;
  let fixture: ComponentFixture<Child2AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Child2AComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Child2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
