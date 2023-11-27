import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Cliente } from "../interfaces/cliente";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    
  http = inject(HttpClient)
  url = 'http://localhost:3000/api/'

  constructor(){}

  listar(){
    return this.http.get(`${this.url}clientes`)
  }

  registrar(Cliente: Cliente){
    return this.http.post(`${this.url}clientes`, Cliente)
  }

  actualizar(id:number, Cliente: Cliente){
    return this.http.patch(`${this.url}clientes/editar/${id}`, Cliente)
  }

  eliminar(id: number){
    return this.http.delete(`${this.url}clientes/eliminar${id}`)
  }
}
