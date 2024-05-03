import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetConComponent } from './det-con.component';

describe('DetConComponent', () => {
  let component: DetConComponent;
  let fixture: ComponentFixture<DetConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetConComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
