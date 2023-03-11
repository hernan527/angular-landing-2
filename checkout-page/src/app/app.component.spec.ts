import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseThisPlanComponent } from './choose-this-plan/choose-this-plan.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

describe('Router:app', () => {
  let location: Location;
  let router: Router;
  let fixture;

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact-us',  component: ContactUsComponent },
    { path: 'choose-this-plan', component: ChooseThisPlanComponent }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [AppComponent]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to empty path redirects to home', fakeAsync(() => {
    router.navigate(['/']);
    tick(50);
    
    expect(location.path()).toBe('/');
  }));

  it('navigate to "contact-us" redirects to /contact-us', fakeAsync(() => {
    router.navigate(['/contact-us']);
    tick(50);

    expect(location.path()).toBe('/contact-us');
  }));

  it('navigate to "choose-this-plan" redirects to /choose-this-plan', fakeAsync(() => {
      router.navigate(['/choose-this-plan']);
      tick(50);

      expect(location.path()).toBe('/choose-this-plan');
  }));

  it('should contain the app-header component', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelector('app-header');

    expect(header).not.toBe(null);
  }));
});