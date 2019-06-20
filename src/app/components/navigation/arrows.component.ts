import { Component } from '@angular/core';
import { ChangeRouteService } from '../../services/changeRoute.service';
import { CheckIfShowService } from '../../services/checkIfShow.service';

@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html'
})
export class ArrowsComponent {

  constructor(
    private changeRouteService: ChangeRouteService,
    public checkIfShowService: CheckIfShowService
  ) {}


}
