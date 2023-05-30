import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './HEADER/header/header.component';
import { InicioComponentComponent } from './app-empresa/inicio-component/inicio-component.component';
import { AcercadeNosotrosComponent } from './app-AcercadeNosotros/acercade-nosotros/acercade-nosotros.component';
import { ProductosyServiciosComponent } from './app-Productos/productosy-servicios/productosy-servicios.component';
import { ContactoComponent } from './app-Contacto/contacto/contacto.component';
import { RegistroComponent } from './app-Registro/registro/registro.component';
import { CarritodeCompraComponent } from './app-CarritodeCompra/carritode-compra/carritode-compra.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BateriaComponent } from './app-baterias/bateria/bateria.component';
import { PanelesComponent } from './app-paneles/paneles/paneles.component';
import { InversoresComponent } from './app-inversores/inversores/inversores.component';
import { EquiposComponent } from './app-equipos/equipos/equipos.component';
import { SistemasComponent } from './app-sistemas/sistemas/sistemas.component';
import { CardsComponent } from './cards/cards.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

const appRoutes:Routes=[
{path:'',component:InicioComponentComponent},
{path:'Acerca de nosotros',component:AcercadeNosotrosComponent},
{path:'Productos y servicios',component:ProductosyServiciosComponent},
{path:'Contacto',component:ContactoComponent},
{path:'Registro',component:RegistroComponent},
{path:'Carrito de compras',component:CarritodeCompraComponent},
{path:'Baterías',component:BateriaComponent},
{path:'Paneles Solares',component:PanelesComponent},
{path:'Inversores',component:InversoresComponent},
{path:'Equipos de distribución Energética',component:EquiposComponent},
{path:'Sistemas de instalación y control',component:SistemasComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    InicioComponentComponent,
    AcercadeNosotrosComponent,
    ProductosyServiciosComponent,
    ContactoComponent,
    RegistroComponent,
    CarritodeCompraComponent,
    FooterComponent,
    BateriaComponent,
    PanelesComponent,
    InversoresComponent,
    EquiposComponent,
    SistemasComponent,
    CardsComponent,
    LoginPopupComponent
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
