import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckIfShowService {

  pageCurrent: string;
  pageCurrentChildren: string;
  menu: Array<any>;
  currentChildrenArr: any;

  arrowTop: boolean = false;
  arrowBottom: boolean = false;
  arrowRight: boolean = false;
  arrowLeft: boolean = false;

  constructor(private router : Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        this.getGeneralData();
      });
  }

  getGeneralData():void {
    const pathCurrent = this.router.url.split("/");

    this.pageCurrentChildren = undefined;
    this.menu = this.router.config;
    this.pageCurrent = pathCurrent[1];
    this.currentChildrenArr = this.menu.filter(data => data.path === pathCurrent[1]).filter(data => data.children)[0];

    if (pathCurrent[2]) {
      if (pathCurrent[2].indexOf("#") > -1) {
        this.pageCurrentChildren = pathCurrent[2].split("#")[0];
      } else {
        this.pageCurrentChildren = pathCurrent[2];
      }
    }

    this.checkIfShow(
      pathCurrent[pathCurrent.length - 1],
      this.menu[1].path,
      this.menu[this.menu.length - 1].path
    );
  }

  checkIfShow(pageLast: string, firstMenu: string, lastMenu: string):void {
    this.arrowTop = (this.currentChildrenArr) ? ((this.currentChildrenArr.children[1].path === this.pageCurrentChildren) ? false : true) : false;
    this.arrowBottom = (this.currentChildrenArr) ? ((this.currentChildrenArr.children[this.currentChildrenArr.children.length - 1].path === this.pageCurrentChildren) ? false : true) : false;
    this.arrowRight = (pageLast === lastMenu) ? false : true;
    this.arrowLeft = (this.pageCurrent === firstMenu) ? false : true;
  }

}
