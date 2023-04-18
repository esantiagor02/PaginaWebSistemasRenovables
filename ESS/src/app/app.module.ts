import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponentComponent } from './app-empresa/inicio-component/inicio-component.component';
import { AcercadeNosotrosComponent } from './app-AcercadeNosotros/acercade-nosotros/acercade-nosotros.component';
import { ProductosyServiciosComponent } from './app-Productos/productosy-servicios/productosy-servicios.component';
import { ContactoComponent } from './app-Contacto/contacto/contacto.component';
import { RegistroComponent } from './app-Registro/registro/registro.component';
import { CarritodeCompraComponent } from './app-CarritodeCompra/carritode-compra/carritode-compra.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
{path:'',component:InicioComponentComponent},
{path:'Acerca de nosotros',component:AcercadeNosotrosComponent},
{path:'Productos y servicios',component:ProductosyServiciosComponent},
{path:'Contacto',component:ContactoComponent},
{path:'Registro',component:RegistroComponent},
{path:'Carrito de compras',component:CarritodeCompraComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponentComponent,
    AcercadeNosotrosComponent,
    ProductosyServiciosComponent,
    ContactoComponent,
    RegistroComponent,
    CarritodeCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
