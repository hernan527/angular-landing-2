import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-this-plan',
  templateUrl: './choose-this-plan.component.html',
  styleUrls: ['./choose-this-plan.component.scss']
})
export class ChooseThisPlanComponent implements OnInit {
  public planName: string;
  public showThankYou = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.planName = history.state.plan;
  }

  submittedValue(value: boolean) {
    this.showThankYou = value;
  }

}
