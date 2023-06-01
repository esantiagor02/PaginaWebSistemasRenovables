import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre?: string;
  email?: string;
  password?: string;

  enviarDatos() {
    const datos = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.enviarAPI(datos);
  }

  enviarAPI(datos: any) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    };

    fetch('https://flask-production-6776.up.railway.app/insertarusuario', requestOptions)
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API
        console.log(data);
        if (data.message === 'creado exitosamente') {
          // Realizar las acciones necesarias después de la creación exitosa
        }
      })
      .catch(error => {
        // Manejar el error en caso de que ocurra
        console.error(error);
      });
  }
}
