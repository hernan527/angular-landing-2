import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';

// Vendors
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [CreditCardComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot()
  ],
  exports: [CreditCardComponent]
})
export class CreditCardModule { }
