import { Injectable } from '@angular/core';
import { Bonecas } from '../types/types';
@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {

  constructor() { }

   listar(): Bonecas[] {
    return [
      {
        id: 1,
        foto: "https://m.media-amazon.com/images/I/71LapqEOkmL._AC_SL1500_.jpg",
        nome: "Marcia Josefina",
        categoria: "Preta",
        preco: 999.99,
        estoque: true,
        status: 1
      }
    ]
}
}
