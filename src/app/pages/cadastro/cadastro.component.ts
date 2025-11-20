import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Para buscar o CEP

import { CadastroUsuarioService } from '../../core/services/cadastro-usuario.service';
import { Usuarios } from '../../core/types/types';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CadastroUsuarioService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      foto: [''],

      cep: ['', [Validators.required, Validators.minLength(8)]],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  buscarCep() {
    const cep = this.formulario.get('cep')?.value;

    if (cep && cep.replace(/\D/g, '').length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe((dados: any) => {
        if (!dados.erro) {

          this.formulario.patchValue({
            logradouro: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          });
          document.getElementById('numero')?.focus();
        }
      });
    }
  }

  cadastrar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const novoUsuario: Usuarios = this.formulario.value;

    if (!novoUsuario.foto) {
      novoUsuario.foto = 'assets/images/user-placeholder.png';
    }

    this.service.addUsuario(novoUsuario).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar', err);
        alert('Erro ao realizar cadastro. Tente novamente.');
      }
    });
  }
}
