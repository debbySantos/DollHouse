import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoEstoqueComponent } from './gerenciamento-estoque.component';

describe('GerenciamentoEstoqueComponent', () => {
  let component: GerenciamentoEstoqueComponent;
  let fixture: ComponentFixture<GerenciamentoEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciamentoEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerenciamentoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
