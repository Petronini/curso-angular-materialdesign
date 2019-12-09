import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';
import { environment } from 'src/environments/environment';

const URL = environment.baseURL +'/pedidos';




@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor( private http: HttpClient) { }
  getAll(): Observable<Pedido[]>{
    
    return this.http.get<Pedido[]>(URL);

  }


}
