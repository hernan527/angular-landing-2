import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() step: number;
  @Input() initialValue: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Output() valueInput = new EventEmitter();

  public newValue: number;
  constructor() {
  }

  ngOnInit() {
  }

  valueRange(event) {
    this.newValue = event.target.value;
    this.valueInput.emit({value: this.newValue});
  }

}
