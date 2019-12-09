import { Component } from '@angular/core';
import { Camarero } from 'src/app/model/camarero';
import { CamareroService } from 'src/app/services/camarero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent  {

  camarero: Camarero = new Camarero();

  constructor(  private camareroService: CamareroService,
                private router: Router ) { }


  crear(){
    this.camareroService.create(this.camarero).subscribe( respuesta => {
      console.log(respuesta);
      this.camarero = new Camarero; // se inicializa de nuevo y vamos a por otro....
      this.router.navigateByUrl('listadocamarero');
    });

    
  }
}
