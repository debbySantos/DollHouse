import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: 'bonecaCard',
    standalone: true,
    imports: [NgClass],
    templateUrl: './cardBonecas.componente.html',
    styleUrl: './cardBonecas.componente.css'
})

export class bonecaCardComponente {
    @Input() imgBoneca: string = "assets/images/boneca1.svg";
    @Input() titulo: string = "Barbie Piquenique";

}