import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioService } from '../../core/services/cadastro-usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  // Importante: Adicione ReactiveFormsModule e CommonModule
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario!: FormGroup;
  erroLogin: boolean = false; 
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: CadastroUsuarioService
  ) {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onBotaoClicado() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const { email, password } = this.formulario.value;

    this.service.login(email, password).subscribe({
      next: (usuariosEncontrados) => {
        if (usuariosEncontrados && usuariosEncontrados.length > 0) {
          const usuarioLogado = usuariosEncontrados[0];

          localStorage.setItem('usuario', JSON.stringify(usuarioLogado));

          this.router.navigate(['/areaAdm']);
        } else {
          this.erroLogin = true;
        }
      },
      error: (err) => {
        console.error('Erro ao tentar logar:', err);
        this.erroLogin = true;
      }
    });
  }
}
