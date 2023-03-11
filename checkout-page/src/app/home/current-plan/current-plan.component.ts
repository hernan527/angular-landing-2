import { Component, OnInit } from '@angular/core';
import { CurrentPlanService } from '../../services/current-plan.service';
import { CurrentPlan } from '../../model/current-plan';

@Component({
  selector: 'app-current-plan',
  templateUrl: './current-plan.component.html',
  styleUrls: ['./current-plan.component.scss']
})
export class CurrentPlanComponent implements OnInit {

  currentPlan = <CurrentPlan>{};

  constructor(public service: CurrentPlanService) {
  }

  ngOnInit() {
    this.service.getCurrentPlan()
    .subscribe( (data) => { 
      this.currentPlan = data;
    });
  }

}
