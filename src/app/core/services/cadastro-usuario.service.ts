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

    
}