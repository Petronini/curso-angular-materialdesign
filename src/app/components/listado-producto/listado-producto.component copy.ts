import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'nombre', 'fechaAlta', 'precio', 'codigo', 'descatalogado'];
  productos: Producto[] = [];

  constructor( private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAll().subscribe( data =>{
      console.log("productos del servido", data);
      this.productos = data;
    } )
  }

}
