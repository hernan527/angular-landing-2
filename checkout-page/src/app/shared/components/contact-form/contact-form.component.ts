import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() selectOptions: Array<string>;
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('' , Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', null)
    });
  }

  onSubmit() {
    console.log('submit');
  }

}
