import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'nombre', 'fechaAlta', 'precio', 'codigo', 'descatalogado'];
  productos: Producto[] = [];
  dataSource = new MatTableDataSource<Producto>(this.productos);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor( private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAll().subscribe( data =>{
      console.log("productos del servido", data);
      // this.productos = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
