import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]"
})
export class ColorDirective {

  @HostBinding("style.color")
  buttonColor: string = "";

  @HostBinding("style.border")
  border: string = "";

  @HostListener("click") changeColor (): void {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.buttonColor = color;
    this.border = "3px solid" + color;
}

}
