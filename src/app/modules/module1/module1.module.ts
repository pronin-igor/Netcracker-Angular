import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Component1Component } from "./component1/component1.component";
import { Component1p1Component } from "./component1/component1p1/component1p1.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IncreaseDirective } from "./increase.directive";
import { ColorDirective } from "./color.directive";
import { BirthdayPipe } from "./birthday.pipe";
import { GradePipe } from "./grade.pipe";

@NgModule({
  declarations: [
    BirthdayPipe,
    ColorDirective,
    Component1Component,
    Component1p1Component,
    GradePipe,
    IncreaseDirective,
  ],
  exports: [
    Component1Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Module1Module { }
