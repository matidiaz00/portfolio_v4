import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../../interfaces/experiencia';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html'
})
export class ExperienciaComponent implements OnInit {

    data: Array<Experiencia>;
    show: boolean = false;

    constructor(private dataService:DataService) {}

    ngOnInit() {
        this.data = this.dataService.getData();
    }

}