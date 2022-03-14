import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  constructor() {}

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  submit() {
    this.password = "Huzzah!";
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
  }
}
