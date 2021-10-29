import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //для HTML templateUrl, модулей и кода - template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hi there, client!';
  fn: string="";
  ln: string="";
  fullName:string = "";

  changeFullName() {
    this.fullName = this.fn + ' ' + this.ln;
  }
}
