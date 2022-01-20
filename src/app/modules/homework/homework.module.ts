import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentsTableComponent } from "./studentsTable/studentsTable.component";
import { ReactiveFormComponent } from "./studentsTable/reactiveForm/reactiveForm.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IncreaseDirective } from "./Directives/increase.directive";
import { ColorDirective } from "./Directives/color.directive";
import { BirthdayPipe } from "./Pipes/birthday.pipe";
import { GradePipe } from "./Pipes/grade.pipe";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    BirthdayPipe,
    ColorDirective,
    GradePipe,
    IncreaseDirective,
    PageNotFoundComponent,
    ReactiveFormComponent,
    StudentsTableComponent,
  ],
  exports: [
    StudentsTableComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class HomeworkModule { }
