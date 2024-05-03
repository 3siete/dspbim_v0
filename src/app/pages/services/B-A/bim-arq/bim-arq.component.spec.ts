import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimArqComponent } from './bim-arq.component';

describe('BimArqComponent', () => {
  let component: BimArqComponent;
  let fixture: ComponentFixture<BimArqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BimArqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BimArqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
