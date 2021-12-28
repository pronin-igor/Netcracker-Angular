import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appIncrease]"
})
export class IncreaseDirective {

  @HostBinding("style.transform") transform: string = "";
  @HostBinding("style.box-shadow") shadow: string = "";
  @HostBinding("style.transition") transition: string = "";

  @HostListener("mouseenter") onMouseEnter (): void {
    this.transform = "scale(1.05)";
    this.shadow = "0 0 10px rgba(0, 0, 0, .5)";
    this.transition = "0.5s all";
  }

  @HostListener("mouseleave") onMouseLeave (): void {
    this.transform = "";
    this.shadow = "";
    this.transition = "";
  }

}

