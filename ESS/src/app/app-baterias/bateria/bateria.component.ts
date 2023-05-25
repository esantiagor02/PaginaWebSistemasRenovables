import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent  implements OnInit{
  
  myData: any[];
 
  constructor (){
    this.myData =[]
  }
  ngOnInit(): void {
    
    console.log("Baterias");
    this.getPost();
  }
  getPost(){
    fetch('https://flask-production-6776.up.railway.app/productos')
      .then(response => response.json())
      .then(json => {
        this.myData = json; // Almacena la respuesta en la variable "myData"
        console.log(this.myData); // Opcionalmente, puedes imprimir la respuesta en la consola
      });
  }

  

}
