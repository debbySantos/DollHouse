import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router'; // <--- 1. Importante: Importar o Router
import { Bonecas } from "../../core/types/types";

@Component({
    selector: 'bonecaCard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cardBonecas.componente.html',
    styleUrl: './cardBonecas.componente.css'
})
export class bonecaCardComponente {

    // Mantive seus inputs originais caso você use em outro lugar, 
    // mas o principal aqui é o 'dados'
    @Input() imgBoneca: string = "assets/images/boneca1.svg";
    @Input() titulo: string = "Barbie Piquenique";

    @Input() dados!: Bonecas;

    // 2. Injetamos o Router para poder mudar de página
    constructor(private router: Router) { }

    // 3. Função que o botão vai chamar
    comprarBoneca() {
        if (this.dados) {
            console.log("Comprando a boneca:", this.dados.nome);

            // Salva os dados dessa boneca específica na memória do navegador
            localStorage.setItem('produtoCarrinho', JSON.stringify(this.dados));

            // Vai para a página do carrinho
            this.router.navigate(['/carrinho']);
        }
    }
}