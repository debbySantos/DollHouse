import { Component, Input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
    selector: 'dica',
    standalone: true,
    imports: [NgClass],
    templateUrl: './dicaComponente.html',
    styleUrl: './dicaComponente.css'
})

export class dicaComponente {
    @Input() titulo: string = "USO DE PRODUTOS";
    @Input() texto: string = "EVITE USAR PRODUTOS DE LIMPEZA E MAQUIAGEM";

}