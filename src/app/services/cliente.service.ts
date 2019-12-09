import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { environment } from 'src/environments/environment';

const URL = environment.baseURL +'/clientes';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(URL);
  }


  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(URL, cliente);
  }

}
