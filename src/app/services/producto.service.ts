import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { environment } from 'src/environments/environment';

const URL = environment.baseURL +'/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Producto[]>{
    
    return this.http.get<Producto[]>(URL);

  }

  create(producto: Producto): Observable<Producto[]>{
    return this.http.post<Producto[]>(URL, producto);
  }
  
}
