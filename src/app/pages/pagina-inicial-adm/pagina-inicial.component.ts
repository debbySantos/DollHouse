import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
@Component({
  selector: 'pagina-inicial-adm',
  standalone: true,
  imports: [RouterModule, FormsModule, MenuLateralAdmComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PagInicialAdmComponent {


}
