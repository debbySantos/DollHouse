import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  // --- DADOS DO PRODUTO (Vindos da Home) ---
  nomeProduto: string = 'Carregando produto...';
  imagemProduto: string = ''; // Vai receber a URL da foto
  
  // --- VARIÁVEIS DE CÁLCULO ---
  quantidade: number = 1;
  precoUnitario: number = 0;
  frete: number = 0;
  cepInput: string = '';

  // --- TOTAIS ---
  subtotal: number = 0;
  total: number = 0;
  valorParcela: number = 0;

  // --- CONTROLE DA MENSAGEM FINAL ---
  mostrarMensagemSucesso: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef, // Para atualizar a tela
    private router: Router          // Para navegar para a Home
  ) { }

  ngOnInit() {
    this.carregarProdutoDoStorage();
    this.calcularTudo();
  }

  // --- 1. LER DADOS DO NAVEGADOR ---
  carregarProdutoDoStorage() {
    const dadosSalvos = localStorage.getItem('produtoCarrinho');

    if (dadosSalvos) {
      const produto = JSON.parse(dadosSalvos);
      
      // Mapeando os dados (ajuste conforme seu objeto Boneca)
      this.nomeProduto = produto.nome;       
      this.precoUnitario = produto.preco;    
      this.imagemProduto = produto.foto; // Importante: usa .foto pois é assim que está no seu objeto
    }
  }

  // --- 2. AÇÕES DE QUANTIDADE E FRETE ---
  aumentarQuantidade() {
    this.quantidade++;
    this.calcularTudo();
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
      this.calcularTudo();
    }
  }

  removerProduto() {
    this.quantidade = 0;
    this.calcularTudo();
    // Opcional: localStorage.removeItem('produtoCarrinho');
  }

  calcularFrete() {
    // Simulação simples: Se tiver 8 digitos, cobra R$ 15,00
    if (this.cepInput.length >= 8) {
      this.frete = 15.00; 
    } else {
      this.frete = 0;
    }
    this.calcularTudo();
  }

  // --- 3. FINALIZAR COMPRA (COM POP-UP E REDIRECT) ---
  finalizarCompra() {
    // Mostra o overlay de sucesso
    this.mostrarMensagemSucesso = true;

    // Limpa o produto da memória (opcional)
    localStorage.removeItem('produtoCarrinho');

    // Espera 3 segundos e volta para a Home
    setTimeout(() => {
      this.router.navigate(['/']); 
    }, 3000);
  }

  // --- 4. CÁLCULO CENTRAL ---
  calcularTudo() {
    this.subtotal = this.quantidade * this.precoUnitario;
    this.total = this.subtotal + this.frete;
    this.valorParcela = this.total / 3;
    
    // Força o Angular a atualizar a tela agora
    this.cdr.detectChanges();
  }
}