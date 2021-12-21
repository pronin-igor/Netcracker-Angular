import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NewcomponentComponent } from "./newcomponent/newcomponent.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReacticeFormsComponent } from "./newcomponent/reactice-forms/reactice-forms.component";

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ReacticeFormsComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
