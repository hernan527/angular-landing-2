import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
import { UserTypeComponent } from './user-type/user-type.component';

// Shared Components
import { UserSliderYearModule } from '../shared/components/user-slider-year/user-slider-year.module';

// Services
import { PlanService } from '../services/plan.service';
import { CurrentPlanService } from '../services/current-plan.service';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    ChoosePlanComponent,
    CurrentPlanComponent,
    UserTypeComponent
  ],
  imports: [
    CommonModule,
    UserSliderYearModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [
    PlanService,
    CurrentPlanService
  ]
})
export class HomeModule { }
