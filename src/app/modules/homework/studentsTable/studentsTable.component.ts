import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServerService } from "../Services/serverService.service";
import { HardcodedService } from "../Services/hardcodedService.service";

@Component({
  selector: "StudentsTable",
  templateUrl: "./studentsTable.component.html",
  styleUrls: ["./studentsTable.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsTableComponent implements OnInit {

  constructor(public serverService: ServerService, private hardcodedService: HardcodedService,
              public activatedRoute: ActivatedRoute, private ref: ChangeDetectorRef) {
    console.log("StudentsTableComponent work");
  }

   _usersInfo: { birthday: Date, patronymic: string, surname: string, grade: number, name: string, id: number }[] = [];

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === "addStudent") {
      const groupPopup = document.getElementById("groupPopup");
      if (groupPopup) {
        groupPopup.style.display = "block";
      }
      this._addButtonIsShown = true;
      this._editButtonIsShown = false;
    }

    if (this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === "editStudent") {
      const groupPopup = document.getElementById("groupPopup");
      if (groupPopup) {
        groupPopup.style.display = "block";
      }
      this._addButtonIsShown = false;
      this._editButtonIsShown = true;
      this._selectButtonIsShown = false;
    }

    this.activatedRoute.queryParams.subscribe( (next) => {
          this.debug = next["debug"];
          this.fabric(this.debug);
          this.ref.markForCheck();
        });

  }

  _styleObject = {
    color: "red",
    border: "3px solid red",
  };

  _usersInfoCopy = this._usersInfo.slice();

  hilight = false;
  name: string = "";
  birthdayFrom: string = "";
  birthdayTo: string = "";
  gridFrom: number = 0;
  gridTo: number = 6;
  nameSorted = false;
  surnameSorted = false;
  patronymicSorted = false;
  birthdaySorted = false;
  gradeSorted = false;
  surnameToDelete: string = "";
  _addButtonIsShown = false;
  _editButtonIsShown = false;
  _selectButtonIsShown = false;
  debug = "";

  fabric(type: string): void {
    if (type === "true") {
      this._usersInfo = this.hardcodedService.usersInfo;
    } else {
      this._usersInfo = this.serverService.usersInfo;
      this.serverService.stringVar$.subscribe((data) => {
        this._usersInfo = this.serverService.usersInfo;
        this.ref.markForCheck();
      });
      }
  }

  turn(): void {
    this.hilight = !this.hilight;
  }

  getGrade(grade: number): boolean {
    if (grade < 3 && this.hilight) {
      return true;
    }
    return false;

  }

  getName(userName: string): boolean {
    if (userName === this.name) {
      return true;
    }
    return false;
  }

  getFilter(birthday: Date, grade: number): string {
    if (grade < this.gridFrom || grade > this.gridTo) {
      return "none";
    }
    const _birthdayFrom: Date = new Date(this.birthdayFrom);
    const _birthdayTo: Date = new Date(this.birthdayTo);
    if (birthday < _birthdayFrom || birthday > _birthdayTo) {
      return "none";
    }
    return "";
  }

  sortName(): void {
    if (!this.nameSorted) {
      this._usersInfo.sort((a, b): number => {
        const c = a.name;
        const d = b.name;
        if (c < d) {
          return -1;
        } if (c > d) {
          return 1;
        }
        return 0;
      });
    } else {
      this._usersInfo = this._usersInfoCopy.slice();
    }
    this.nameSorted = !this.nameSorted;
  }

  sortSurname(): void {
    if (!this.surnameSorted) {
      this._usersInfo.sort((a, b): number => {
        const c = a.surname;
        const d = b.surname;
        if (c < d) {
          return -1;
        } if (c > d) {
          return 1;
        }
        return 0;
      });
    } else {
      this._usersInfo = this._usersInfoCopy.slice();
    }
    this.surnameSorted = !this.surnameSorted;
  }

  sortPatronymic(): void {
    if (!this.patronymicSorted) {
      this._usersInfo.sort((a, b): number => {
        const c = a.patronymic;
        const d = b.patronymic;
        if (c < d) {
          return -1;
        } if (c > d) {
          return 1;
        }
        return 0;
      });
    } else {
      this._usersInfo = this._usersInfoCopy.slice();
    }
    this.patronymicSorted = !this.patronymicSorted;
  }

  sortBirthday(): void {
    if (!this.birthdaySorted) {
      this._usersInfo.sort((a, b): number => {
        const c = a.birthday;
        const d = b.birthday;
        if (c < d) {
          return -1;
        } if (c > d) {
          return 1;
        }
        return 0;
      });
    } else {
      this._usersInfo = this._usersInfoCopy.slice();
    }
    this.birthdaySorted = !this.birthdaySorted;
  }

  sortGrade(): void {
    if (!this.gradeSorted) {
      this._usersInfo.sort((a, b): number => {
        const c = a.grade;
        const d = b.grade;
        if (c < d) {
          return -1;
        } if (c > d) {
          return 1;
        }
        return 0;
      });
    } else {
      this._usersInfo = this._usersInfoCopy.slice();
    }
    this.gradeSorted = !this.gradeSorted;
  }

  deleteStudent(surnameToDelete: string): void {
    this._usersInfo.forEach((value, index, array) => {
      if (value.surname === surnameToDelete) {
        array.splice(index, 1);
      }
    });
    this._usersInfoCopy.forEach((value, index, array) => {
      if (value.surname === surnameToDelete) {
        array.splice(index, 1);
      }
    });
  }

  showAddButton(): void {
    this._addButtonIsShown = true;
    this._editButtonIsShown = false;
    this._selectButtonIsShown = false;
  }

  showEditButton(): void {
    this._editButtonIsShown = true;
    this._addButtonIsShown = false;
    this._selectButtonIsShown = true;
  }

  changeDirectiveColor(): void {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this._styleObject.color = color;
    this._styleObject.border = "3px solid" + color;
  }

}
