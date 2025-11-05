import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 necessário pro ngModel

@Component({
  selector: 'app-esqueci-minha-senha',
  standalone: true, // 👈 indica que o componente é independente (sem AppModule)
  imports: [CommonModule, FormsModule], // 👈 adiciona o FormsModule aqui
  templateUrl: 'EsqueciMinhaSenha.html',
  styleUrls: ['EsqueciMinhaSenha.css']
})
export class EsqueciMinhaSenhaComponent {
  email: string = '';
  mensagem: string = '';

  enviarEmail() {
    if (!this.email) {
      this.mensagem = 'Por favor, digite um e-mail válido.';
      return;
    }

    // Simulação de envio
    console.log('E-mail enviado para:', this.email);
    this.mensagem = 'Um link de recuperação foi enviado para o seu e-mail.';
  }

  voltarLogin() {
    // Aqui você pode navegar de volta para a tela de login
    console.log('Voltando para o login...');
  }
}
