import { Injectable } from "@angular/core";
import { Usuarios } from "../types/types";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CadastroUsuarioService {
    private readonly API = 'http://localhost:3000/usuarios'

    constructor(private http: HttpClient){}

      listar(): Observable<Usuarios[]>{
        return this.http.get<Usuarios[]>(this.API)
      }
    
      buscarUserId(id:number): Observable<Usuarios | undefined>{
        return this.http.get<Usuarios>(this.API + `/${id}`)
      }
    
      addUser(boneca: Usuarios):Observable<Usuarios>{
        return this.http.post<Usuarios>(this.API, boneca)
      }
    
      alterarUser(boneca: Usuarios):Observable<Usuarios>{
        const url = `${this.API}/${boneca.id}`
        return this.http.put<Usuarios>(url, boneca)
      }
      deletarUser(id:number): Observable<Usuarios>{
        return this.http.delete<Usuarios>(this.API + `/${id}`)
      }
    
}