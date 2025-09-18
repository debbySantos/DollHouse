import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: 'beneficio',
    standalone: true,
    imports: [NgClass],
    templateUrl: './beneficios.componente.html',
    styleUrl: './beneficios.componente.css'
})
export class beneficioComponente {
    @Input() classeIcone: string = "fa-solid fa-truck-moving";
    @Input() titulo: string = "Frete Grátis";
    @Input() subTitulo: string = "para todo o brasil em compras acima de R$299,90";

}