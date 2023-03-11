import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { NavigationExtras } from '@angular/router';

import { ChooseThisPlanComponent } from './choose-this-plan.component';

describe('ChooseThisPlanComponent', () => {
  let component: ChooseThisPlanComponent;
  let fixture: ComponentFixture<ChooseThisPlanComponent>;

  // const navigationExtras: NavigationExtras = {state: {plan: 'name'}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ChooseThisPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseThisPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
