/* --- Angular Import --- */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logOut(){
    localStorage.removeItem("token")
    alert("logOut success")
  }
}
