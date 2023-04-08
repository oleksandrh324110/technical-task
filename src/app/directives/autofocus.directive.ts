import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  constructor(private host: ElementRef) {
  }

  ngOnInit() {
    this.host.nativeElement.focus()
  }
}
