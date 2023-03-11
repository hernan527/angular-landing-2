import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from '../services/company-info.service';
import { CompanyInfo } from '../model/company-info';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  name: string;
  phone: string;
  public company = <CompanyInfo>{};
  public daysOpen = <any>{};

  selectOptions = ['Technical Support', 'Sales', 'Other'];

  constructor(public companyService: CompanyInfoService) { }

  ngOnInit() {
    this.companyService.getCompanyInfo()
      .subscribe((data) => {
        this.company = data;
        this.daysOpen = this.company['daysOpen'];
      });
  }

  inputsName(event: any) {
    this.name = event.target.value;
  }

  inputsPhone(event: any) {
    this.phone = event.target.value;
  }

  sendData() {
  }

}
