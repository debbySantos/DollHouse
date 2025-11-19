import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { beneficioComponente } from '../../shared/beneficios/beneficios.componente';
import {bonecaCardComponente} from '../../shared/cardBonecas/cardBonecas.componente';
import { botaoDegradeComponente } from '../../shared/botaoDegrade/botao.componente';
import { dicaComponente } from '../../shared/dicasCuidados/dicaComponente';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, beneficioComponente, bonecaCardComponente, botaoDegradeComponente, dicaComponente, CardDepoimentoComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
