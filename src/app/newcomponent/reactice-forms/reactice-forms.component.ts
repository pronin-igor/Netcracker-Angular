import { Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: "app-reactice-forms",
  templateUrl: "./reactice-forms.component.html",
  styleUrls: ["./reactice-forms.component.css"]
})
export class ReacticeFormsComponent implements OnInit {

   constructor() {
     this.addFormIsShown = true;
     this.editFormIsShown = true;
     this.editFormSelectIsShown = true;
     this.selectedUserId = -1;
   }

   ngOnInit(): void {
     console.log();
   }

  @Input()
  usersInfo: { "id": number, "name": string, "surname": string, "patronymic": string, "birthday": Date, "grade": number }[] | undefined;
   addFormIsShown: boolean;
   editFormIsShown: boolean;
   editFormSelectIsShown: boolean;
   selectedUserId: number;

  addFormModel = new FormGroup({
    person : new FormGroup({
      name: new FormControl("example", [Validators.required]),
      surname: new FormControl("example", [Validators.required]),
      patronymic: new FormControl("", [Validators.required]),
    }, [this.myValidator2]),
    birthday: new FormControl(new Date().toISOString().substring(0, 10), [this.myValidator]),
    grade: new FormControl("6", [Validators.pattern(/[1-5]/)]),
  });

  editFormModel = new FormGroup({
    person : new FormGroup({
      name: new FormControl("example", [Validators.required]),
      surname: new FormControl("example", [Validators.required]),
      patronymic: new FormControl("", [Validators.required]),
    }, [this.myValidator2]),
    birthday: new FormControl(new Date().toISOString().substring(0, 10), [this.myValidator]),
    grade: new FormControl("6", [Validators.pattern(/[1-5]/)]),
  });



  myValidator(control: AbstractControl): ValidationErrors | null{
    const date = new Date(control.value);
    const newDate = new Date();
    newDate.setDate(date.getDate());
    newDate.setMonth(date.getMonth());
    newDate.setFullYear(date.getFullYear() + 10);
    if (newDate > new Date()) {
      return { wrongDate: true };
    }
    return null;
  }

  myValidator2(control: AbstractControl): ValidationErrors | null{
    const name = control.get("name")?.value;
    const surname = control.get("surname")?.value;
    const patronymic = control.get("patronymic")?.value;
    if (name === surname || name === patronymic) {
      return { wrongName: true };
    }
    return null;
  }

   showAddForm(): void {
     this.addFormIsShown = !this.addFormIsShown;
   }


  showEditForm(): void {
    this.editFormIsShown = !this.editFormIsShown;
    this.editFormSelectIsShown = !this.editFormSelectIsShown;

  }

   addUser(): void {
     this.usersInfo?.push({ "id": this.usersInfo?.length,  "name": this.addFormModel.get("person")?.get("name")?.value,
       "surname": this.addFormModel.get("person")?.get("surname")?.value, "patronymic": this.addFormModel.get("person")?.get("patronymic")?.value,
       "birthday": new Date(this.addFormModel.controls["birthday"].value), "grade": this.addFormModel.controls["grade"].value });
     this.addFormIsShown = !this.addFormIsShown;
   }

   editUser(): void {
     if (this.usersInfo) {
       this.usersInfo[this.selectedUserId].name = this.editFormModel.get("person")?.get("name")?.value;
       this.usersInfo[this.selectedUserId].surname = this.editFormModel.get("person")?.get("surname")?.value;
       this.usersInfo[this.selectedUserId].patronymic = this.editFormModel.get("person")?.get("patronymic")?.value;
       this.usersInfo[this.selectedUserId].birthday = new Date(this.editFormModel.controls["birthday"].value);
       this.usersInfo[this.selectedUserId].grade = this.editFormModel.controls["grade"].value;
       this.editFormIsShown = !this.editFormIsShown;
       this.editFormSelectIsShown = !this.editFormSelectIsShown;
     }
   }

  selectOption(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const value = Number(element.value);
    if (this.usersInfo) {
      this.editFormModel.get("person")?.get("name")?.setValue(this.usersInfo[value].name);
      this.editFormModel.get("person")?.get("surname")?.setValue(this.usersInfo[value].surname);
      this.editFormModel.get("person")?.get("patronymic")?.setValue(this.usersInfo[value].patronymic);
      this.editFormModel.controls["birthday"].setValue(this.usersInfo[value].birthday.toISOString().substring(0, 10));
      this.editFormModel.controls["grade"].setValue(this.usersInfo[value].grade);
    }
    this.selectedUserId = value;
   }

}



