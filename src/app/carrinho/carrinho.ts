import { Component } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  imports: [],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho {
  quantidade = 1;

  increment() {
    console.log('Incrementar clicado');
    this.quantidade++;
  }

  decrement() {
    console.log('Decrementar clicado');
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }
}
