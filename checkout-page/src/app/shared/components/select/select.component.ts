import { Component, OnInit, HostListener, Input, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @ViewChild('select', {static: false}) select: ElementRef;
  @Input() options: string;
  showOptions = false;

  @HostListener('click', ['$event']) onClickSelect(event: any) {
    this.showOptions = !this.showOptions;

    if (event.target.tagName === 'LI') {
      const liText = event.target.innerText;
      this.select.nativeElement.innerText = liText;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  closeSelectOptions() {
    this.showOptions = false;
  }

  rotateOnClick() {
    if (this.showOptions) {
      return 'flip-icon';
    }
  }

}
