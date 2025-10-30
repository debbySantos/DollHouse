import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
import { Bonecas } from '../../core/types/types';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-prod',
  standalone: true,
  imports: [RouterModule, MenuLateralAdmComponent, FormsModule, CommonModule],
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})


export class CadastroProdComponent {
  bonecaId?: number;

  boneca: Bonecas = {} as Bonecas;

  constructor(
    private service: CadastroProdutoService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.bonecaId = Number(this.route.snapshot.params['id'])
    if (this.bonecaId) {
      service.buscarBonecaId(this.bonecaId).subscribe(boneca => {
        if (boneca) {
          this.boneca.id = boneca.id;
          this.boneca.nome = boneca.nome;
          this.boneca.categoria = boneca.categoria;
          this.boneca.estoque = boneca.estoque;
          this.boneca.preco = boneca.preco;
          this.boneca.quantidade = boneca.quantidade;
          this.boneca.status = boneca.status;
          this.boneca.foto = boneca.foto;
          this.boneca.descricao = boneca.descricao
        }
      })
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {

        this.boneca.foto = e.target?.result as string;
      };


      reader.readAsDataURL(file);
    }
  }

  submeter() {
    if (this.bonecaId) {
      this.service.alterarBoneca(this.boneca).subscribe(() => {
        this.router.navigate(['/gerenciamentoEstoque'])
      })
    } else {
      this.service.addBoneca(this.boneca).subscribe(() => {
        this.router.navigate(['/gerenciamentoEstoque'])
      })
    }
  }
}
