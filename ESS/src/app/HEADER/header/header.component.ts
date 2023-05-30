import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HEADERComponent {

  isPopupVisible = false;

  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }
}
