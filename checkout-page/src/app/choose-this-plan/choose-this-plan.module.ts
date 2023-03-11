import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChooseThisPlanComponent } from './choose-this-plan.component';

// Shared Components
import { CardFormModule } from '../shared/components/card-form/card-form.module';

const routes: Routes = [
  { path: '', component: ChooseThisPlanComponent }
];

@NgModule({
  declarations: [ChooseThisPlanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardFormModule
  ],
  exports: [ChooseThisPlanComponent]
})
export class ChooseThisPlanModule { }
