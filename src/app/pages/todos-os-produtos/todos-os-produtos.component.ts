import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';
import { Bonecas } from '../../core/types/types';

// --- IMPORTANTE ---
// Ajuste o caminho abaixo para onde seu arquivo boneca-card.component.ts está realmente guardado
// Exemplo: se estiver na pasta 'shared', mantenha assim. Se estiver em 'components', mude o caminho.
import { bonecaCardComponente } from '../../shared/cardBonecas/cardBonecas.componente';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-todos-os-produtos',
  standalone: true,
  // Adicionamos o BonecaCardComponent aqui para ele funcionar no HTML
  imports: [CommonModule, RouterModule, bonecaCardComponente, HeaderComponent],
  templateUrl: './todos-os-produtos.component.html',
  styleUrl: './todos-os-produtos.component.css'
})
export class TodosOsProdutosComponent implements OnInit {

  listaProdutos: Bonecas[] = [];
  carregando: boolean = true;

  constructor(private service: CadastroProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.carregando = true;

    this.service.listar ().subscribe({
      next: (dados: any[]) => {
        if (dados && dados.length > 0) {
          this.listaProdutos = dados.map(item => this.formatarBoneca(item));
        } else {
          this.listaProdutos = this.gerarBonecasMock();
        }
        this.carregando = false;
      },
      error: (erro) => {
        console.warn('Usando dados Mock devido a erro na API:', erro);
        this.listaProdutos = this.gerarBonecasMock();
        this.carregando = false;
      }
    });
  }

  // ... (Mantive o restante do código de Mock e Formatação igual para economizar espaço) ...

  gerarBonecasMock(): Bonecas[] {
    return [
      { id: 1, nome: 'Barbie Fashionista', categoria: 'Fashion', preco: 89.90, estoque: true, quantidade: 10, status: 1, descricao: '...', foto: 'assets/images/barbie1.png' },
      { id: 2, nome: 'Barbie Sereia', categoria: 'Sereia', preco: 129.90, estoque: true, quantidade: 5, status: 1, descricao: '...', foto: 'assets/images/barbie-sereia.png' },
      { id: 3, nome: 'Ken Praia', categoria: 'Ken', preco: 69.90, estoque: true, quantidade: 15, status: 1, descricao: '...', foto: 'assets/images/ken.png' },
      { id: 4, nome: 'Barbie Médica', categoria: 'Profissões', preco: 159.90, estoque: true, quantidade: 8, status: 1, descricao: '...', foto: 'assets/images/barbie-medica.png' },
      { id: 5, nome: 'Barbie Extra', categoria: 'Colecionável', preco: 249.90, estoque: true, quantidade: 3, status: 1, descricao: '...', foto: 'assets/images/barbie-extra.png' },
      { id: 6, nome: 'Trailer Sonhos', categoria: 'Acessórios', preco: 599.90, estoque: false, quantidade: 0, status: 1, descricao: '...', foto: 'assets/images/trailer.png' },
      { id: 7, nome: 'Barbie Bailarina', categoria: 'Fashion', preco: 79.90, estoque: true, quantidade: 20, status: 1, descricao: '...', foto: 'assets/images/barbie-bailarina.png' },
      { id: 8, nome: 'Chelsea Pônei', categoria: 'Chelsea', preco: 99.90, estoque: true, quantidade: 7, status: 1, descricao: '...', foto: 'assets/images/chelsea.png' }
    ];
  }

  private formatarBoneca(item: any): Bonecas {
    return {
      ...item,
      preco: this.converterPreco(item.preco),
      quantidade: this.converterNumero(item.quantidade),
      foto: item.foto ? item.foto : 'assets/images/sem-foto.png'
    } as Bonecas;
  }

  private converterPreco(valor: any): number {
    if (typeof valor === 'number') return valor;
    if (typeof valor === 'string') {
      const valorLimpo = valor.replace('R$', '').replace(/\s/g, '').replace(',', '.');
      return parseFloat(valorLimpo) || 0;
    }
    return 0;
  }

  private converterNumero(valor: any): number {
    if (typeof valor === 'number') return valor;
    if (typeof valor === 'string') return parseInt(valor) || 0;
    return 0;
  }
}
