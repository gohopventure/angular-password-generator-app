import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
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

  onChangeLength(value: string) {
    if(!isNaN(parseInt(value))) {
      this.length = parseInt(value);
    }
  }

  submit() {
    this.password = "Huzzah!";
    console.log(`
      Generating password with the following criteria:\n
      Use letters: ${this.useLetters}
      Use numbers: ${this.useNumbers}
      Use symbols: ${this.useSymbols}
    `)
  }
}
