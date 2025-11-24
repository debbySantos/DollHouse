import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // <--- IMPORTANTE: Adicione isso

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // <--- Adicione aqui também
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  // ... o resto do seu código continua igual ...
  quantidade: number = 1;
  precoUnitario: number = 255.00;
  frete: number = 0;
  cepInput: string = '';

  get subtotal(): number { return this.quantidade * this.precoUnitario; }
  get total(): number { return this.subtotal + this.frete; }
  get valorParcela(): number { return this.total / 3; }

  aumentarQuantidade() { this.quantidade++; }
  diminuirQuantidade() { if (this.quantidade > 1) this.quantidade--; }
  removerProduto() { this.quantidade = 0; this.frete = 0; }
  
  calcularFrete() { 
    if (this.cepInput.length >= 8) this.frete = 15.00; 
  }
  
  finalizarCompra() { alert('Finalizando...'); }
}