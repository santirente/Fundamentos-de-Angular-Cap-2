import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uppercaseTextDirective]'
})
export class UppercaseTextDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: Event): void {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const letterInput = (event as KeyboardEvent).key;
    if (alphabet.includes(letterInput)) {
      event.preventDefault();
      this.el.nativeElement.value += letterInput.toUpperCase();
    }
  }

}
