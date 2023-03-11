import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[closeOnClick]'
})
export class CloseOnClickDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() public closeOnClick = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
      if (!this.elementRef.nativeElement.contains(targetElement)) {
          this.closeOnClick.emit(null);
      }
  }
}
