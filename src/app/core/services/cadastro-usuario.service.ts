import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  private readonly API = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.API);
  }

  buscarUsuarioId(id: number): Observable<Usuarios | undefined> {
    return this.http.get<Usuarios>(`${this.API}/${id}`);
  }

  addUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.API, usuario);
  }

  alterarUsuario(usuario: Usuarios): Observable<Usuarios> {
    const url = `${this.API}/${usuario.id}`;
    return this.http.put<Usuarios>(url, usuario);
  }

  deletarUsuario(id: number): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.API}/${id}`);
  }

  login(email: string, senha: string): Observable<Usuarios[]> {
    // O JSON Server permite filtrar usando ?campo=valor&campo2=valor2
    return this.http.get<Usuarios[]>(`${this.API}?email=${email}&senha=${senha}`);
  }

  verificarEmail(email: string): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(`${this.API}?email=${email}`);
  }
}
