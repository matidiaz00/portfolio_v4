import { Component, AfterViewInit } from '@angular/core';
import { ChangeRouteService } from '../../services/changeRoute.service';
import { CheckIfShowService } from '../../services/checkIfShowService.service';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html'
})
export class ArrowsComponent implements AfterViewInit {

  constructor(
    private changeRouteService: ChangeRouteService,
    private checkIfShowService: CheckIfShowService
  ) {}

  ngAfterViewInit() {
    this.checkIfShowService.check();
  }

  

}
