import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdComponent } from './cadastro-prod.component';

describe('CadastroProdComponent', () => {
  let component: CadastroProdComponent;
  let fixture: ComponentFixture<CadastroProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
