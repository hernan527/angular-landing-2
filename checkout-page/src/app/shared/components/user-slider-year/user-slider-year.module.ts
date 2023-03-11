import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSliderYearComponent } from './user-slider-year.component';
import { SliderModule } from '../slider/slider.module';


@NgModule({
  declarations: [UserSliderYearComponent],
  imports: [
    CommonModule,
    SliderModule
  ],
  exports: [UserSliderYearComponent]
})
export class UserSliderYearModule { }
