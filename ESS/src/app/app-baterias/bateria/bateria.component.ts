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

  getPost() {
    const groupId = '2';
    
    fetch('https://flask-production-6776.up.railway.app/productoByGroup?id=' + groupId, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      
    })
      .then(response => response.json())
      .then(data => {
        this.myData = data; // Store the response in the "myData" variable
        console.log(this.myData); // Optionally, you can log the response to the console
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  

}
