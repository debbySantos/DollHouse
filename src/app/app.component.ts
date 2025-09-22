import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { beneficioComponente } from './shared/beneficios/beneficios.componente';
import {bonecaCardComponente} from './shared/cardBonecas/cardBonecas.componente';
import { botaoDegradeComponente } from './shared/botaoDegrade/botao.componente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, beneficioComponente, bonecaCardComponente, botaoDegradeComponente],
  templateUrl: './landingPage.html',
  styleUrl: './landingPage.css'
})
export class AppComponent {
  title = 'dollHouse';
}
