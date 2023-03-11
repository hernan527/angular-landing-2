import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';

// Shared Components
import { ContactFormModule } from '../shared/components/contact-form/contact-form.module';

const routes: Routes = [
  { path: '', component: ContactUsComponent }
];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ContactFormModule
  ],
  exports: [ContactUsComponent]
})
export class ContactUsModule { }
