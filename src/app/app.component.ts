import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.paragraph();
  inputText = '';

  onInput(value: string) {
    this.inputText = value;
  }

  compareLetters(letter: string, inputLetter: string): string {
    if(!inputLetter) return '';

    return letter === inputLetter ? 'has-text-success has-text-weight-bold is-underlined' : 'has-text-danger has-text-weight-bold is-underlined'
  }
}
