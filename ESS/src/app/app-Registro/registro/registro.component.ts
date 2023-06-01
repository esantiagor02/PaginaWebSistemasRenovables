import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre?: string;
  email?: string;
  password?: string;

  // constructor(private http: HttpClient) {}

  enviarDatos() {
    const datos = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    // this.enviarAPI(datos);
  }

  // enviarAPI(datos: any) {
  //   this.http.post('URL_DE_TU_API', datos)
  //     .subscribe(
  //       response => {
  //         // Manejar la respuesta de la API
  //         console.log(response);
  //       },
  //       error => {
  //         // Manejar el error en caso de que ocurra
  //         console.error(error);
  //       }
  //     );
  // }
}

