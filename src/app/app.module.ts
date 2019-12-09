import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';

import { TablePaginationExample } from './comp/table-pagination/table-pagination-example';
import { TableExpandableRowsExample } from './comp/table-expandable-rows/table-expandable-rows-example';
import { TableHttpExample } from './comp/table-http-example/table-http-example';

// Mis componentes
import { AltaCamareroComponent } from './components/alta-camarero/alta-camarero.component';
import { ListadoCamareroComponent } from './components/listado-camarero/listado-camarero.component';
import { TableBasicExample } from './comp/table-basic-example/table-basic-example';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { HomeComponent } from './components/home/home.component';
import { TableFilteringExample } from './comp/table-filtering/table-filtering-example';

  
@NgModule({
  declarations: [
    AppComponent,
    TablePaginationExample, // Componentes material design
    TableExpandableRowsExample,
    TableFilteringExample,
    TableHttpExample,
    TableBasicExample,
    AltaCamareroComponent, // Mis Componentes
    ListadoCamareroComponent,
    AltaProductoComponent,
    ListadoProductoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }