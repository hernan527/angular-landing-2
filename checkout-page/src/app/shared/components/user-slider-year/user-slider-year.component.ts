import { Component, OnInit, Input } from '@angular/core';
import { UsersPriceService } from '../../../services/users-price.service';

@Component({
  selector: 'app-user-slider-year',
  templateUrl: './user-slider-year.component.html',
  styleUrls: ['./user-slider-year.component.scss']
})
export class UserSliderYearComponent implements OnInit {

  @Input() step: number;
  @Input() initialValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;

  numberOfUsers: number;
  pricePerYear: number;
  plans: any;

  constructor(private service: UsersPriceService) {
  }

  ngOnInit() {
    this.defaultValue(event);
  }

  showValue(event) {
    this.defaultValue(event);
  }

  defaultValue(event) {
    this.plans = this.service.getUserAndPrice(event ? event.value : '0');
    this.numberOfUsers = this.plans.numberOfUsers;
    this.pricePerYear = this.plans.pricePerYear;
  }

}
