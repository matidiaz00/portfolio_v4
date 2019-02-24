import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { routerAnimation, widthAnimation } from '../animations';

@Component({
  selector: 'app-routerOutlet',
  templateUrl: './routerOutlet.component.html',
  animations: [ routerAnimation, widthAnimation ]
})
export class RouterOutletComponent implements OnInit {

  setID: string;
  home: boolean = false;

  constructor(private router:Router) {
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
          this.checkIfHome()
      }
      if (event instanceof NavigationError) {
          console.log(event.error);
      }
    });
  }

  ngOnInit() {
    this.setID = this.getCurrentPage();
    this.checkIfHome();
  }

  getCurrentPage() {
    const url = this.router.url;
    const pageWParams = url.split("/");
    const cpage = pageWParams[1];
    return cpage;
  }
  checkIfHome() {
    const url = this.router.url;
    const currentPage = url.substring(13, this.router.url.length);
    if (currentPage === "home") {
      this.home = true;
    } else {
      this.home = false;
    }
  }

}