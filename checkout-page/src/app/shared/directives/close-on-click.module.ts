import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseOnClickDirective } from './close-on-click.directive';

@NgModule({
  declarations: [CloseOnClickDirective],
  imports: [
    CommonModule
  ],
  exports: [CloseOnClickDirective]
})
export class CloseOnClickModule { }
