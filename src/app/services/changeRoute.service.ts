import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ChangeRouteService {

    constructor(private router : Router) {}

    changeRoute(arrowType:string):void {
        const pathCurrent:Array<any> = this.router.url.split("/");
        const nav:string = (arrowType === "left" || arrowType === "right") ? this.ifx(arrowType, pathCurrent) : this.ify(arrowType, pathCurrent);
        this.router.navigate([nav]);
    }

    ifx(arrowXType:string, pathCurrent: Array<any>):string {
        const menu:Array<any> = this.router.config;
        const index:number = menu.findIndex(data => data.path === pathCurrent[1]); //currentIndex
        return menu[(arrowXType === "left") ? index - 1 : index + 1].path;
    }

    ify(arrowYType:string, pathCurrent: Array<any>):string {
        const currentChildrenArr:any = this.router.config.filter(data => data.path === pathCurrent[1]).filter(data => data.children)[0];
        let pageCurrentChildren:any = undefined;
        if (pathCurrent[2]) {
            if (pathCurrent[2].indexOf("#") > -1) {
                pageCurrentChildren = pathCurrent[2].split("#")[0];
            } else {
                pageCurrentChildren = pathCurrent[2];
            }
        }
        const index:number = currentChildrenArr.children.findIndex(data => data.path === pageCurrentChildren) //currentChildrenIndex
        return pathCurrent[1] + '/' + currentChildrenArr.children[(arrowYType === "top") ? index - 1 : index + 1].path;
    }

}