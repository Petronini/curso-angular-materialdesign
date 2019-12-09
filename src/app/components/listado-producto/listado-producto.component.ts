import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  displayedColumns: string[] = ['categoria', 'nombre', 'fechaAlta', 'precio', 'codigo', 'descatalogado'];
  // productos: Producto[] = [];
  productos = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) ordena: MatSort;
  @ViewChild(MatPaginator, {static: true}) pagina: MatPaginator;
  
  constructor( private productoService: ProductoService) { }
  ngOnInit() {
    this.productoService.getAll().subscribe( data =>{
      console.log("productos del servido", data);
      // this.productos = data;
      this.productos = new MatTableDataSource(data);
      this.productos.sort = this.ordena;
      this.productos.paginator = this.pagina;
    } );
  }

  applyFilter(filterValue: string) {
    this.productos.filter = filterValue.trim().toLowerCase();
  }
}
