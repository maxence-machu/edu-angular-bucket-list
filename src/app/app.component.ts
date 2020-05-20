import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maxence-bucket-list';

  addCity() { 
    console.log("J’ajoute une ville !"); 
  }
}
