import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carrinho } from './components/carrinho/carrinho';
import { VerProduto } from './components/ver-produto/ver-produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Carrinho, VerProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dollhouse');
}
