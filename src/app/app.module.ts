import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeworkModule } from "./modules/homework/homework.module";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HomeworkModule,
        ReactiveFormsModule,
        routing,
    ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
