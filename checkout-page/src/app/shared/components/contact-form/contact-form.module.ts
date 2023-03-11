import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

// Shared components
import { SelectModule } from '../select/select.module';
import { InputModule } from '../input/input.module';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    InputModule
  ],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
