import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyInfo } from '../model/company-info';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private http: HttpClient) { }

  getCompanyInfo(): Observable<CompanyInfo> {
    return this.http.get<CompanyInfo>(`${environment.db}/company`);
  }
}
