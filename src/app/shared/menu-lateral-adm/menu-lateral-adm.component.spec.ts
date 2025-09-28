import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAdmComponent } from './menu-lateral-adm.component';

describe('MenuLateralAdmComponent', () => {
  let component: MenuLateralAdmComponent;
  let fixture: ComponentFixture<MenuLateralAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
