import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import ProyectosData from '../json/proyectos.json';
import HabilidadesData from '../json/habilidades.json';
import ExperienciaData from '../json/experiencia.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private router:Router) {}

    getData() {
        let cpage = this.getCurrentPage();
        return this.filterJsonByCP(cpage);
    }

    getCurrentPage() {
        const url = this.router.url;
        const urlArr = url.split("/");
        const substring = (urlArr[1] === "proyectos") ? 11 : ((urlArr[1] === "habilidades") ? 13 : ((urlArr[1] === "experiencia") ? 13 : 0));
        const children = url.substring(substring, url.length).split("#");
        const cpage = {path: urlArr[1], children: children[0]};
        return cpage;
    };

    filterJsonByCP(cpage: any) {
        const json = (cpage.path === "proyectos") ? ProyectosData : ((cpage.path === "habilidades") ? HabilidadesData : ((cpage.path === "experiencia") ? ExperienciaData : null));
        const dataFilter = json.filter(data => data.name === cpage.children ? data : null);
        return dataFilter[0];
    };

}