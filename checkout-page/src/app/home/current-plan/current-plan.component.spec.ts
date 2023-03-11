import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CurrentPlanComponent } from './current-plan.component';
import { CurrentPlanService } from '../../services/current-plan.service';
import { CurrentPlanMock } from '../../services/mock/current-plan-mock';

describe('CurrentPlanComponent', () => {
  let component: CurrentPlanComponent;
  let fixture: ComponentFixture<CurrentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPlanComponent ],
      imports: [ HttpClientModule ],
      providers: [{ provide: CurrentPlanService, useClass: CurrentPlanMock }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a number of days left', () => {
    spyOn(component.service, 'getCurrentPlan').and.callThrough();
    const daysLeft = fixture.debugElement.nativeElement.querySelector('.count-down-txt');

    expect(component.currentPlan.daysLeft).not.toBe(null);
    expect(component.currentPlan.daysLeft).toBeGreaterThan(0);
  });

  it('should have a number of members', () => {
    spyOn(component.service, 'getCurrentPlan').and.callThrough();
    const members = fixture.debugElement.nativeElement.querySelector('.members-txt');

    expect(component.currentPlan.members).not.toBe(null);
    expect(component.currentPlan.members).toBeGreaterThan(0);
  });

  it('should show the plan type name', () => {
    spyOn(component.service, 'getCurrentPlan').and.callThrough();
    const planType = fixture.debugElement.nativeElement.querySelector('h2');

    expect(component.currentPlan.type).not.toBe(null);
    expect(component.currentPlan.type).toBe('Free 30 Day Trial');
  })
  // should go to the # page when clicking on the manage your team members link
});
