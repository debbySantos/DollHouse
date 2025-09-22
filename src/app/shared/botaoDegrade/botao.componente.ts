import { Component, input, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: 'botaoDegrade',
    standalone: true,
    imports: [NgClass],
    templateUrl: './botao.componente.html',
    styleUrl: './botao.componente.css'
})

export class botaoDegradeComponente {
    @Input() textoBotao: string = "Explorar Coleção";
    @Input() tamanho : "pequeno" | "medio" = "medio";

}