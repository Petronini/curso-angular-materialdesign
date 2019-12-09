import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // reactive for javascript
import { Camarero } from '../model/camarero';
import { environment } from 'src/environments/environment';

  const URL = environment.baseURL +'/camareros';


@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Camarero[]>{

    return this.http.get<Camarero[]>(URL); // aparato de hacer peticiones
     
  }

  create( camarero: Camarero ): Observable<Camarero>{
    return this.http.post<Camarero>(URL, camarero);
  }




}