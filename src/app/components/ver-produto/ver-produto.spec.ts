import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProduto } from './ver-produto';

describe('VerProduto', () => {
  let component: VerProduto;
  let fixture: ComponentFixture<VerProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
