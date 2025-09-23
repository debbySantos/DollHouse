import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { beneficioComponente } from './shared/beneficios/beneficios.componente';
import {bonecaCardComponente} from './shared/cardBonecas/cardBonecas.componente';
import { botaoDegradeComponente } from './shared/botaoDegrade/botao.componente';
import { dicaComponente } from './shared/dicasCuidados/dicaComponente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, beneficioComponente, bonecaCardComponente, botaoDegradeComponente, dicaComponente],
  templateUrl: './landingPage.html',
  styleUrl: './landingPage.css'
})
export class AppComponent {
  title = 'dollHouse';
}
