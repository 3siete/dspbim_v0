import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsBuiltComponent } from './as-built.component';

describe('AsBuiltComponent', () => {
  let component: AsBuiltComponent;
  let fixture: ComponentFixture<AsBuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsBuiltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
