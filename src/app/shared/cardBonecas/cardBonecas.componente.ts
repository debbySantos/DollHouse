import { Component, Input } from "@angular/core";
import { CommonModule, NgClass } from "@angular/common";
import { Bonecas } from "../../core/types/types";

@Component({
    selector: 'bonecaCard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cardBonecas.componente.html',
    styleUrl: './cardBonecas.componente.css'
})

export class bonecaCardComponente {
    @Input() imgBoneca: string = "assets/images/boneca1.svg";
    @Input() titulo: string = "Barbie Piquenique";

    @Input() dados!: Bonecas;

}
