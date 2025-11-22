import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'pagina-inicial-adm',
  standalone: true,
  imports: [RouterModule, FormsModule, MenuLateralAdmComponent, CommonModule, RouterModule, MenuLateralAdmComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PagInicialAdmComponent {

produtos = [
    {
      id: 1,
      sku: 'SER-002',
      nome: 'Barbie Sereia',
      categoria: 'Sereias',
      preco: 129.90,
      estoque: 45,
      status: 'em-estoque',
      imagem: 'https://cdn.awsli.com.br/800x800/155/155955/produto/57117280/72647fe906.jpg'
    },
    {
      id: 2,
      sku: 'KEN-055',
      nome: 'Ken Praia',
      categoria: 'Ken',
      preco: 79.90,
      estoque: 3, 
      status: 'baixo-estoque',
      imagem: 'https://rihappy.vtexassets.com/arquivos/ids/6357564/Boneco-Articulado---Barbie---Ken---Praia---Rosa-E-Azul---Mattel-0.jpg?v=638573633415200000'
    },
    {
      id: 3,
      sku: 'COL-882',
      nome: 'Barbie Extra',
      categoria: 'Colecionável',
      preco: 249.90,
      estoque: 0, 
      status: 'esgotado',
      imagem: 'https://m.media-amazon.com/images/I/71k7hNJ94BL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      sku: 'FAS-102',
      nome: 'Barbie Fashionista',
      categoria: 'Fashion',
      preco: 89.90,
      estoque: 120,
      status: 'em-estoque',
      imagem: 'https://rihappy.vtexassets.com/arquivos/ids/6698788/17265295209038.jpg?v=638630741091800000'
    },
    {
      id: 5,
      sku: 'PRO-331',
      nome: 'Barbie Médica',
      categoria: 'Profissões',
      preco: 159.90,
      estoque: 8,
      status: 'baixo-estoque',
      imagem: 'https://static.festapratica.com/public/festapraticabrinquedos/imagens/produtos/boneca-barbie-profissoes-medica-pediatra-loira-mattel-65fd9ab69548e.jpg'
    }
  ]
}
