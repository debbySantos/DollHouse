import { Injectable } from '@angular/core';
import { Bonecas } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService {

  private readonly API = 'http://localhost:3000/bonecas'

  constructor(private http: HttpClient) {}

  listar(): Observable<Bonecas[]>{
    return this.http.get<Bonecas[]>(this.API)
  }

  buscarBonecaId(id:number): Observable<Bonecas | undefined>{
    return this.http.get<Bonecas>(this.API + `/${id}`)
  }

  addBoneca(boneca: Bonecas):Observable<Bonecas>{
    return this.http.post<Bonecas>(this.API, boneca)
  }

  alterarBoneca(boneca: Bonecas):Observable<Bonecas>{
    const url = `${this.API}/${boneca.id}`
    return this.http.put<Bonecas>(url, boneca)
  }
  deletarBoneca(id:number): Observable<Bonecas>{
    return this.http.delete<Bonecas>(this.API + `/${id}`)
  }

//   constructor() { }

//    listar(): Bonecas[] {
//     return [
//       {
//         id: 1,
//         foto: "https://m.media-amazon.com/images/I/71LapqEOkmL._AC_SL1500_.jpg",
//         nome: "Marcia Josefina",
//         categoria: "Preta",
//         preco: 999.99,
//         estoque: true,
//         status: 1
//       }
//     ]
// }
}
