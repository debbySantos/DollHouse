import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-esqueci-minha-senha',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: 'EsqueciMinhaSenha.html',
  styleUrls: ['EsqueciMinhaSenha.css']
})
export class EsqueciMinhaSenhaComponent {
  email: string = '';
  mensagem: string = '';

  constructor(private router: Router) {} 

  enviarEmail() {
    if (!this.email) {
      this.mensagem = 'Por favor, digite um e-mail válido.';
      return;
    }

    console.log('E-mail enviado para:', this.email);
    this.mensagem = 'Um link de recuperação foi enviado para o seu e-mail.';
  }

  voltarLogin() {
    this.router.navigate(['/login']); 
  }
}
