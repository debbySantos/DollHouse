import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
import { Injectable } from '@angular/core';
import { Bonecas } from '../../core/types/types';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-gerenciamento-estoque',
  standalone: true,
  imports: [RouterModule, MenuLateralAdmComponent],
  templateUrl: './gerenciamento-estoque.component.html',
  styleUrl: './gerenciamento-estoque.component.css'
})
export class GerenciamentoEstoqueComponent implements OnInit {

  listaBonecas: Bonecas[] = [];
  constructor(private service: CadastroProdutoService) { }
  ngOnInit(): void {
    this.listaBonecas = this.service.listar();
  }

}

