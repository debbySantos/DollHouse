import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';

@Component({
  selector: 'app-cadastro-prod',
  standalone: true,
  imports: [RouterModule, MenuLateralAdmComponent],
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})


export class CadastroProdComponent {

}
