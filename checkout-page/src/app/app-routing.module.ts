import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(mod => mod.ContactUsModule) },
  { path: 'choose-this-plan', loadChildren: () => import('./choose-this-plan/choose-this-plan.module').then(mod => mod.ChooseThisPlanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }