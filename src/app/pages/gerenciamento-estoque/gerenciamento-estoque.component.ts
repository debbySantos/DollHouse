import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';


@Component({
  selector: 'app-gerenciamento-estoque',
  standalone: true,
  imports: [RouterModule, MenuLateralAdmComponent],
  templateUrl: './gerenciamento-estoque.component.html',
  styleUrl: './gerenciamento-estoque.component.css'
})
export class GerenciamentoEstoqueComponent {

}
