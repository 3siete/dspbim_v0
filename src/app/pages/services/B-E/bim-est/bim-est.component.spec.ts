import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimEstComponent } from './bim-est.component';

describe('BimEstComponent', () => {
  let component: BimEstComponent;
  let fixture: ComponentFixture<BimEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimEstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
