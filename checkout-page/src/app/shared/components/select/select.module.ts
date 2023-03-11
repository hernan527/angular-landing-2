import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';

// Shared Directives
import { CloseOnClickModule } from '../../directives/close-on-click.module';


@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    CloseOnClickModule
  ],
  exports: [SelectComponent]
})
export class SelectModule { }
