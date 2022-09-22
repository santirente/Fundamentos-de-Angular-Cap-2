import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIlumineColumnOnHover]'
})
export class IlumineColumnOnHoverDirective {

  constructor(private element: ElementRef) {
    
  }
  @HostListener('mouseenter', ['$event']) mouseover(event: object): void {
    const e = <KeyboardEvent>event;
    this.element.nativeElement.style.backgroundColor = 'red';
    console.log(this.element)
  }
  @HostListener('mouseout', ['$event']) mouseout(event: object): void {
    const e = <KeyboardEvent>event;
    this.element.nativeElement.style.backgroundColor = 'white';
    console.log(this.element)
  }

}
