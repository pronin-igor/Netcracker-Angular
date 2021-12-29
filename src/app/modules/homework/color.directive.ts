import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective {

  constructor(public renderer: Renderer2, public el: ElementRef) {
    this.el.nativeElement.addEventListener("click", () => {
      this.appColorClick.emit("clicked");
    });
}

  @Output()
  appColorClick: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  styleObject = { color: "green", border: "3px solid green" };

  @HostBinding("style.color") get getObjectColor(): string {
    return this.styleObject.color;
  }

  @HostBinding("style.border") get getObjectBorder(): string {
    return this.styleObject.border;
  }

}
