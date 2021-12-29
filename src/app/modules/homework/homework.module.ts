import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsTableComponent } from "./studentsTable/studentsTable.component";
import { ReactiveFormComponent } from "./studentsTable/reactiveForm/reactiveForm.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IncreaseDirective } from "./increase.directive";
import { ColorDirective } from "./color.directive";
import { BirthdayPipe } from "./birthday.pipe";
import { GradePipe } from "./grade.pipe";

@NgModule({
  declarations: [
    BirthdayPipe,
    ColorDirective,
    GradePipe,
    IncreaseDirective,
    ReactiveFormComponent,
    StudentsTableComponent,
  ],
  exports: [
    StudentsTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeworkModule { }
