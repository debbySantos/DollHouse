import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
import { Bonecas } from '../../core/types/types';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gerenciamento-estoque',
  standalone: true,
  imports: [RouterModule, MenuLateralAdmComponent, CommonModule, FormsModule],
  templateUrl: './gerenciamento-estoque.component.html',
  styleUrl: './gerenciamento-estoque.component.css'
})
export class GerenciamentoEstoqueComponent implements OnInit {

  listaBonecas: Bonecas[] = [];
  constructor(private service: CadastroProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((boneca) => {
      this.listaBonecas = boneca;
    });
  }

  excluir(id:number){
    if(id){
      this.service.deletarBoneca(id).subscribe(() => {
        window.location.reload() 
      })
    }
  }
}

