import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocuEjecComponent } from './docu-ejec.component';

describe('DocuEjecComponent', () => {
  let component: DocuEjecComponent;
  let fixture: ComponentFixture<DocuEjecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocuEjecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocuEjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
