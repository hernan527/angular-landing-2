import { of } from 'rxjs';

export class CurrentPlanMock {
    getCurrentPlan() {
        return of({
            type : "Free 30 Day Trial",
            daysLeft : 4,
            members : 10
        });
    }
}