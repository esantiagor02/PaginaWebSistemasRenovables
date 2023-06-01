import { Component } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  enviarDatos() {
    const datos = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.enviarAPI(datos);
  }

  async enviarAPI(datos: any) {
    try {
      const response = await this.http.post<any>('https://flask-production-6776.up.railway.app/insertarusuario', datos).toPromise();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
