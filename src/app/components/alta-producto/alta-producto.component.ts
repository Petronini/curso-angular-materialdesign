import { Component} from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {

  producto: Producto = new Producto();

  categorias: string[] = ['TAPA','COMIDA','CERVEZA','CAFE'];

  constructor( private productoService: ProductoService,
                private router: Router ) { }

  crear(){
    this.productoService.create(this.producto).subscribe( respuesta => {
      console.log('la respuesta del servidor', respuesta ); 
      this.router.navigateByUrl('listadoproducto');
    });
  }


}
