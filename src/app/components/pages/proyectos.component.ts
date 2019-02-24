import { Component, OnInit, ElementRef } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {

  data: Array<Proyecto>;
  show: boolean = false;
  slidersLength: number = 0;
  sliders: any = null;

  constructor(
    private elem: ElementRef,
    private dataService:DataService
  ) {
    this.sliders = this.elem.nativeElement.getElementsByClassName('slider');
  }

  ngOnInit() {
    this.data = this.dataService.getData();
    this.setItemSlider(0);
  }

  setItemSlider(number:number) {
    var i
    for (i = 0; i < this.sliders.length; i++) {
      this.sliders[i].classList.remove("active");
      if (i === number) {
        this.sliders[i].classList.add("active");
      }
    }
  }

  repeatNav() {
    this.slidersLength = this.sliders.length;
    return Array(this.slidersLength);
  }

}
