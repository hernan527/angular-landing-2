import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentPlan } from '../model/current-plan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentPlanService {
  constructor(private http: HttpClient) { }

  getCurrentPlan(): Observable<CurrentPlan> {
    return this.http.get<CurrentPlan>(`${environment.db}/current`);
  }
}
