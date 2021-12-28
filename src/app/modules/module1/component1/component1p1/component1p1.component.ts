import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: "app-component1p1",
  templateUrl: "./component1p1.component.html",
  styleUrls: ["./component1p1.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component1p1Component implements OnInit {

  constructor() {
    this.addButtonIsShown = false;
    this.editButtonIsShown = false;
    this.selectedUserId = -1;
  }

  ngOnInit(): void {
    console.log();
  }

  @Input()
  usersInfo: { "id": number, "name": string, "surname": string, "patronymic": string, "birthday": Date, "grade": number }[] | undefined;
  @Input()
  addButtonIsShown: boolean;
  @Input()
  editButtonIsShown: boolean;
  selectedUserId: number;

  addFormModel = new FormGroup({
    person : new FormGroup({
      name: new FormControl("example", [Validators.required]),
      surname: new FormControl("example", [Validators.required]),
      patronymic: new FormControl("", [Validators.required]),
    }, [this.validatorForName]),
    birthday: new FormControl(new Date().toISOString().substring(0, 10), [this.validatorForDate]),
    grade: new FormControl("6", [Validators.pattern(/[1-5]/)]),
  });

  validatorForDate(control: AbstractControl): ValidationErrors | null{
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

  validatorForName(control: AbstractControl): ValidationErrors | null{
    const name = control.get("name")?.value;
    const surname = control.get("surname")?.value;
    const patronymic = control.get("patronymic")?.value;
    if (name === surname || name === patronymic) {
      return { wrongName: true };
    }
    return null;
  }

  addUser(): void {
    this.usersInfo?.push({ "id": this.usersInfo?.length,  "name": this.addFormModel.get("person")?.get("name")?.value,
      "surname": this.addFormModel.get("person")?.get("surname")?.value, "patronymic": this.addFormModel.get("person")?.get("patronymic")?.value,
      "birthday": new Date(this.addFormModel.controls["birthday"].value), "grade": this.addFormModel.controls["grade"].value });
  }

  editUser(): void {
    if (this.usersInfo) {
      this.usersInfo[this.selectedUserId].name = this.addFormModel.get("person")?.get("name")?.value;
      this.usersInfo[this.selectedUserId].surname = this.addFormModel.get("person")?.get("surname")?.value;
      this.usersInfo[this.selectedUserId].patronymic = this.addFormModel.get("person")?.get("patronymic")?.value;
      this.usersInfo[this.selectedUserId].birthday = new Date(this.addFormModel.controls["birthday"].value);
      this.usersInfo[this.selectedUserId].grade = this.addFormModel.controls["grade"].value;
    }
  }

  selectOption(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const value = Number(element.value);
    if (this.usersInfo) {
      this.addFormModel.get("person")?.get("name")?.setValue(this.usersInfo[value].name);
      this.addFormModel.get("person")?.get("surname")?.setValue(this.usersInfo[value].surname);
      this.addFormModel.get("person")?.get("patronymic")?.setValue(this.usersInfo[value].patronymic);
      this.addFormModel.controls["birthday"].setValue(this.usersInfo[value].birthday.toISOString().substring(0, 10));
      this.addFormModel.controls["grade"].setValue(this.usersInfo[value].grade);
    }
    this.selectedUserId = value;
  }

}
