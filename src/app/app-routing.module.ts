import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AltaCamareroComponent } from './components/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/listado-camarero/listado-camarero.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'altacamarero', component: AltaCamareroComponent },
  { path: 'listadocamarero', component: ListadoCamareroComponent },
  { path: 'altaproducto', component: AltaProductoComponent },
  { path: 'listadoproducto', component: ListadoProductoComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}