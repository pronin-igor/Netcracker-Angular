import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ServerService } from "../../Services/serverService.service";
import { HardcodedService } from "../../Services/hardcodedService.service";

@Component({
  selector: "ReacticeForm",
  templateUrl: "./reactiveForm.component.html",
  styleUrls: ["./reactiveForm.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {

  constructor(private serverService: ServerService, private hardcodedService: HardcodedService, private activatedRoute: ActivatedRoute) {
  console.log("ReactiveFormComponent work");
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === "editStudent") {
      const id = this.activatedRoute.snapshot.params["id"];
      const idNumber = Number(id);
      if (this.usersInfo) {
if (idNumber > -1 && idNumber < this.usersInfo?.length) {
        this.selectedUserId = idNumber;
        console.log("work");
          this.addFormModel.get("person")?.get("name")?.setValue(this.usersInfo[this.selectedUserId].name);
          this.addFormModel.get("person")?.get("surname")?.setValue(this.usersInfo[this.selectedUserId].surname);
          this.addFormModel.get("person")?.get("patronymic")?.setValue(this.usersInfo[this.selectedUserId].patronymic);
          this.addFormModel.controls["birthday"].setValue(new Date(this.usersInfo[this.selectedUserId].birthday).toISOString().substring(0, 10));
          this.addFormModel.controls["grade"].setValue(this.usersInfo[this.selectedUserId].grade);
      }
}
    }
  }

  @Input()
  usersInfo: { "id": number, "name": string, "surname": string, "patronymic": string, "birthday": Date, "grade": number }[] | undefined;
  @Input()
  addButtonIsShown = false;
  @Input()
  editButtonIsShown = false;
  @Input()
  selectButtonIsShown = false;

  selectedUserId = -1;

  addFormModel = new FormGroup({
    person : new FormGroup({
      name: new FormControl("example", [Validators.required]),
      surname: new FormControl("exampl", [Validators.required]),
      patronymic: new FormControl("examp", [Validators.required]),
    }, [this.validatorForName]),
    birthday: new FormControl(new Date().toISOString().substring(0, 10), [this.validatorForDate]),
    grade: new FormControl("5", [Validators.pattern(/[1-5]/)]),
  });

  validatorForDate(control: AbstractControl): ValidationErrors | null{
    const date = new Date(control.value);
    date.setFullYear(date.getFullYear() + 10);
    if (date > new Date()) {
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

  cleanForm(): void {
    this.addFormModel.get("person")?.get("name")?.setValue("");
    this.addFormModel.get("person")?.get("surname")?.setValue("");
    this.addFormModel.get("person")?.get("patronymic")?.setValue("");
    this.addFormModel.controls["birthday"].setValue("");
    this.addFormModel.controls["grade"].setValue("");
  }

  // addUser(): void {
  //   this.usersInfo?.push({ "id": this.usersInfo?.length,  "name": this.addFormModel.get("person")?.get("name")?.value,
  //     "surname": this.addFormModel.get("person")?.get("surname")?.value, "patronymic": this.addFormModel.get("person")?.get("patronymic")?.value,
  //     "birthday": new Date(this.addFormModel.controls["birthday"].value), "grade": this.addFormModel.controls["grade"].value });
  //
  //   this.addFormModel.get("person")?.get("name")?.setValue("");
  //   this.addFormModel.get("person")?.get("surname")?.setValue("");
  //   this.addFormModel.get("person")?.get("patronymic")?.setValue("");
  //   this.addFormModel.controls["birthday"].setValue("");
  //   this.addFormModel.controls["grade"].setValue("");
  // }

  newAddUser(): void {
    if (this.activatedRoute.snapshot.queryParams["debug"] === "true") {
      this.hardcodedService.addStudent(this.hardcodedService.usersInfo.length, this.addFormModel.get("person")?.get("name")?.value,
        this.addFormModel.get("person")?.get("surname")?.value, this.addFormModel.get("person")?.get("patronymic")?.value,
        new Date(this.addFormModel.controls["birthday"].value), this.addFormModel.controls["grade"].value);
    } else {
      this.serverService.addStudent(this.hardcodedService.usersInfo.length, this.addFormModel.get("person")?.get("name")?.value,
        this.addFormModel.get("person")?.get("surname")?.value, this.addFormModel.get("person")?.get("patronymic")?.value,
        new Date(this.addFormModel.controls["birthday"].value), this.addFormModel.controls["grade"].value);
    }

    this.cleanForm();

  }

  // editUser(): void {
  //   if (this.usersInfo) {
  //     this.usersInfo[this.selectedUserId].name = this.addFormModel.get("person")?.get("name")?.value;
  //     this.usersInfo[this.selectedUserId].surname = this.addFormModel.get("person")?.get("surname")?.value;
  //     this.usersInfo[this.selectedUserId].patronymic = this.addFormModel.get("person")?.get("patronymic")?.value;
  //     this.usersInfo[this.selectedUserId].birthday = new Date(this.addFormModel.controls["birthday"].value);
  //     this.usersInfo[this.selectedUserId].grade = this.addFormModel.controls["grade"].value;
  //
  //     this.cleanForm();
  //   }
  //
  // }

  newEditUser(): void {
    if (this.activatedRoute.snapshot.queryParams["debug"] === "true") {
      this.hardcodedService.editStudent(this.selectedUserId, this.addFormModel.get("person")?.get("name")?.value,
        this.addFormModel.get("person")?.get("surname")?.value, this.addFormModel.get("person")?.get("patronymic")?.value,
        new Date(this.addFormModel.controls["birthday"].value), this.addFormModel.controls["grade"].value);
    } else {
      this.serverService.editStudent(this.selectedUserId, this.addFormModel.get("person")?.get("name")?.value,
        this.addFormModel.get("person")?.get("surname")?.value, this.addFormModel.get("person")?.get("patronymic")?.value,
        new Date(this.addFormModel.controls["birthday"].value), this.addFormModel.controls["grade"].value);
    }

        this.cleanForm();
  }

  selectOption(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    const value = Number(element.value);
    if (this.usersInfo) {
      this.addFormModel.get("person")?.get("name")?.setValue(this.usersInfo[value].name);
      this.addFormModel.get("person")?.get("surname")?.setValue(this.usersInfo[value].surname);
      this.addFormModel.get("person")?.get("patronymic")?.setValue(this.usersInfo[value].patronymic);
      this.addFormModel.controls["birthday"].setValue(new Date(this.usersInfo[value].birthday).toISOString().substring(0, 10));
      this.addFormModel.controls["grade"].setValue(this.usersInfo[value].grade);
    }
    this.selectedUserId = value;
  }

}
