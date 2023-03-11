import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { Plan } from '../../model/plan';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  plans: Plan[];
  title = 'CHOOSE THIS PLAN IF YOU\'RE A...';

  constructor(private service: PlanService) { }

  ngOnInit() {
    this.service.getPlan().subscribe( (data) => {
      this.plans = data;
    });
  }

}
