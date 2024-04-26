import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dcd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor() {
    // setInterval(() => {
    //   console.log('asdfasdfds')
    // }, 1000)
  }
}
