import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CompanyInfoService } from '../../services/company-info.service';
import { PlanService } from '../../services/plan.service';
import { CompanyInfo } from '../../model/company-info';
import { Plan } from '../../model/plan';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss']
})
export class ChoosePlanComponent implements OnInit {

  company = <CompanyInfo>{};
  basic: Plan;
  standard: Plan;
  gold: Plan;

  monthValue = true;
  yearValue = false;


  constructor(public companyService: CompanyInfoService,
              public planService: PlanService,
              public router: Router) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
    .subscribe((data) => {
      this.company = data;
    });

    this.planService.getPlan()
    .subscribe((data) => {
      this.basic = data.find(plan => plan.name == 'Basic');
      this.standard = data.find(plan => plan.name == 'Standard');
      this.gold = data.find(plan => plan.name == 'Gold');
    });
  }

  onSelectMonth() {
    this.yearValue = false;
    this.monthValue = true;
  }

  onSelectYear() {
    this.monthValue = false;
    this.yearValue = true;
  }

  choosePlan(name: string){
    const navigationExtras: NavigationExtras = {state: {plan: name}};
    this.router.navigate(['/choose-this-plan'], navigationExtras);
  }
}
