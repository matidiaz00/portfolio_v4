import { Component } from '@angular/core';
import { routerAnimation } from '../animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerAnimation ]
})
export class AppComponent {

  constructor() {}
  
}
