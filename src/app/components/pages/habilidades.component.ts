import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../interfaces/habilidad';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html'
})
export class HabilidadesComponent implements OnInit {

    data: any;

    constructor(private dataService:DataService) {}

    ngOnInit() {
        this.data = this.dataService.getData();
    }
}