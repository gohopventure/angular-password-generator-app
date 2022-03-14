import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string;

  constructor() {
    this.password = '';
  }

  submit() {
    this.password = "Huzzah!";
    console.log(this.password);
  }
}
