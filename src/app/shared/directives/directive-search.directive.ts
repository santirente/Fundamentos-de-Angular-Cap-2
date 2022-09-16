import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[glSearchDirective]',
})
export class DirectiveSearchDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event']) onKeyDown(event: object): void {
    const e = <KeyboardEvent>event;
    console.log(this.el)
    console.log(event);
    console.log(e)
  }
}
