import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newcomponent",
  templateUrl: "./newcomponent.component.html",
  styleUrls: ["./newcomponent.component.css"]
})
export class NewcomponentComponent implements OnInit {

  constructor() {
    this._addButtonIsShown = false;
    this._editButtonIsShown = false;
}

  ngOnInit(): void {
    console.log();
  }

  _usersInfo = [
    { "id": 0, "name": "Ваня", "surname": "Иванов", "patronymic": "Иванович", "birthday": new Date(2000, 4, 20), "grade": 5 },
    { "id": 1, "name": "Петя", "surname": "Петров", "patronymic": "Петрович", "birthday": new Date(1997, 11, 24), "grade": 4 },
    { "id": 2, "name": "Игорь", "surname": "Игорев", "patronymic": "Игоревич", "birthday": new Date(1997, 11, 23), "grade": 2 },
    { "id": 3, "name": "Костя", "surname": "Костев", "patronymic": "Константинович", "birthday": new Date(1980, 2, 27), "grade": 1 },
    { "id": 4, "name": "Кирилл", "surname": "Кириллов", "patronymic": "Кириллович", "birthday": new Date(2002, 5, 21), "grade": 3 },
    { "id": 5, "name": "Никита", "surname": "Никитов", "patronymic": "Никитович", "birthday": new Date(1996, 11, 14), "grade": 5 },
    { "id": 6, "name": "Саша", "surname": "Сашев", "patronymic": "Александрович", "birthday": new Date(2008, 7, 7), "grade": 3 },
    { "id": 7, "name": "Юра", "surname": "Юров", "patronymic": "Юрьевич", "birthday": new Date(2017, 6, 3), "grade": 2 },
    { "id": 8, "name": "Денис", "surname": "Денисов", "patronymic": "Денисович", "birthday": new Date(2019, 3, 29), "grade": 1 },
    { "id": 9, "name": "Илья", "surname": "Ильев", "patronymic": "Ильевич", "birthday": new Date(2020, 8, -18), "grade": 4 },
  ];

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
  _addButtonIsShown: boolean;
  _editButtonIsShown: boolean;

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
  }

  showEditButton(): void {
    this._editButtonIsShown = true;
    this._addButtonIsShown = false;
  }

}
