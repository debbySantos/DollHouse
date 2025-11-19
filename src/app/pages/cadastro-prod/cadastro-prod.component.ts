import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MenuLateralAdmComponent } from '../../shared/menu-lateral-adm/menu-lateral-adm.component';
import { CadastroProdutoService } from '../../core/services/cadastro-produto.service';
import { Bonecas } from '../../core/types/types';

@Component({
  selector: 'app-cadastro-prod',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatButtonModule,
    MenuLateralAdmComponent
  ],
  templateUrl: './cadastro-prod.component.html',
  styleUrl: './cadastro-prod.component.css'
})
export class CadastroProdComponent implements OnInit {

  formulario!: FormGroup;
  bonecaId?: number;

  constructor(
    private fb: FormBuilder, 
    private service: CadastroProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();

    this.bonecaId = Number(this.route.snapshot.params['id']);
    if (this.bonecaId) {
      this.carregarBoneca(this.bonecaId);
    }
  }

  inicializarFormulario() {
    this.formulario = this.fb.group({
      id: [0],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      estoque: [null, Validators.required],
      preco: [0, [Validators.required, Validators.min(0.01)]],
      quantidade: [0, [Validators.required, Validators.min(0)]],
      status: [null, Validators.required],
      descricao: ['', [Validators.maxLength(200), Validators.required]],
      foto: ['', Validators.required]
    });
  }
  carregarBoneca(id: number) {
    this.service.buscarBonecaId(id).subscribe((boneca) => {
      if (boneca) {
        this.formulario.patchValue(boneca);
      }

    });
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target?.result as string;

        this.formulario.patchValue({
          foto: base64String
        });

        this.formulario.get('foto')?.markAsDirty();
      };

      reader.readAsDataURL(file);
    }
  }

  submeter() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched(); 
      return;
    }

    const dadosParaEnviar = this.formulario.getRawValue();

    if (this.bonecaId) {
      dadosParaEnviar.id = this.bonecaId;

      this.service.alterarBoneca(dadosParaEnviar).subscribe({
        next: () => this.router.navigate(['/gerenciamentoEstoque']),
        error: (erro) => console.error('Erro ao atualizar:', erro)
      });

    } else {

      delete dadosParaEnviar.id;

      this.service.addBoneca(dadosParaEnviar).subscribe({
        next: () => this.router.navigate(['/gerenciamentoEstoque']),
        error: (erro) => console.error('Erro ao cadastrar:', erro)
      });
    }
  }
}