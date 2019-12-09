import { Component, OnInit } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';

@Component({
  selector: 'app-listado-camarero',
  templateUrl: './listado-camarero.component.html',
  styleUrls: ['./listado-camarero.component.css']
})
export class ListadoCamareroComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre'];
  camareros: Camarero[] = []; // >> dataSource
  constructor( private camareroService: CamareroService) { }

  ngOnInit() {
    
      this.camareroService.getAll().subscribe( data => 
      this.camareros = data );
    
    
  }

}
 