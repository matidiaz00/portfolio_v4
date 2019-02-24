import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  menu:any = [];
  MainMenu: boolean;

  constructor(private renderer: Renderer2, private router : Router) { }

  ngOnInit() {
    this.menu = this.router.config;
  }

  toggleMenu() {
    this.MainMenu = !this.MainMenu;
    if (this.MainMenu) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.renderer.addClass(document.body, 'position-fixed');
      this.renderer.addClass(document.body, 'text-truncate');
    } else {
      this.renderer.removeClass(document.body, 'position-fixed');
      this.renderer.removeClass(document.body, 'text-truncate'); 
    }
  }

}
