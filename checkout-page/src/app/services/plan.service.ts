import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../model/plan';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  getPlan(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${environment.db}/plans`);
  }
}
