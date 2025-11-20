import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { beneficioComponente } from '../../shared/beneficios/beneficios.componente';
import {bonecaCardComponente} from '../../shared/cardBonecas/cardBonecas.componente';
import { botaoDegradeComponente } from '../../shared/botaoDegrade/botao.componente';
import { dicaComponente } from '../../shared/dicasCuidados/dicaComponente';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { Bonecas } from '../../core/types/types';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, beneficioComponente, bonecaCardComponente, botaoDegradeComponente, dicaComponente, CardDepoimentoComponent, HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    listaMaisVendidas: Bonecas[] = [];
  listaLancamentos: Bonecas[] = [];

  constructor(private service: CadastroProdutoService) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.service.listar().subscribe({
      next: (dados: any[]) => {
        if (dados && dados.length > 0) {
          const todosProdutos = dados.map(item => this.formatarBoneca(item));

          this.listaMaisVendidas = todosProdutos.slice(0, 4);

          this.listaLancamentos = todosProdutos.slice(4, 8);

          if (this.listaLancamentos.length === 0) {
             this.listaLancamentos = this.listaMaisVendidas;
          }
        } else {
          this.usarDadosMock();
        }
      },
      error: (erro) => {
        console.warn('Erro na API, usando Mock na Home:', erro);
        this.usarDadosMock();
      }
    });
  }

  usarDadosMock() {
    const mocks = this.gerarBonecasMock();
    this.listaMaisVendidas = mocks.slice(0, 4);
    this.listaLancamentos = mocks.slice(4, 8);
  }

  private formatarBoneca(item: any): Bonecas {
    return {
      ...item,
      preco: this.converterPreco(item.preco),
      quantidade: typeof item.quantidade === 'string' ? parseInt(item.quantidade) : item.quantidade,
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

  gerarBonecasMock(): Bonecas[] {
    return [
       { id: 1, nome: 'Barbie Fashionista', categoria: 'Fashion', preco: 89.90, estoque: true, quantidade: 10, status: 1, descricao: '', foto: 'assets/images/barbie1.png' },
       { id: 2, nome: 'Barbie Sereia', categoria: 'Sereia', preco: 129.90, estoque: true, quantidade: 5, status: 1, descricao: '', foto: 'assets/images/barbie-sereia.png' },
       { id: 3, nome: 'Ken Praia', categoria: 'Ken', preco: 69.90, estoque: true, quantidade: 15, status: 1, descricao: '', foto: 'assets/images/ken.png' },
       { id: 4, nome: 'Barbie Médica', categoria: 'Profissões', preco: 159.90, estoque: true, quantidade: 8, status: 1, descricao: '', foto: 'assets/images/barbie-medica.png' },
       { id: 5, nome: 'Barbie Extra', categoria: 'Colecionável', preco: 249.90, estoque: true, quantidade: 3, status: 1, descricao: '', foto: 'assets/images/barbie-extra.png' },
       { id: 6, nome: 'Trailer Sonhos', categoria: 'Acessórios', preco: 599.90, estoque: false, quantidade: 0, status: 1, descricao: '', foto: 'assets/images/trailer.png' },
       { id: 7, nome: 'Barbie Bailarina', categoria: 'Fashion', preco: 79.90, estoque: true, quantidade: 20, status: 1, descricao: '', foto: 'assets/images/barbie-bailarina.png' },
       { id: 8, nome: 'Chelsea Pônei', categoria: 'Chelsea', preco: 99.90, estoque: true, quantidade: 7, status: 1, descricao: '', foto: 'assets/images/chelsea.png' }
    ];
  }
}


