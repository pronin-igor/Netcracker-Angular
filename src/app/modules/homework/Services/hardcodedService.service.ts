import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardcodedService {

  usersInfo = [
    { "id": 0, "name": "Hardcoded Ваня", "surname": "Иванов", "patronymic": "Иванович", "birthday": new Date(2000, 4, 20), "grade": 5 },
    { "id": 1, "name": "Hardcoded Петя", "surname": "Петров", "patronymic": "Петрович", "birthday": new Date(1997, 11, 24), "grade": 4 },
    { "id": 2, "name": "Hardcoded Игорь", "surname": "Игорев", "patronymic": "Игоревич", "birthday": new Date(1997, 11, 23), "grade": 2 },
    { "id": 3, "name": "Hardcoded Костя", "surname": "Костев", "patronymic": "Константинович", "birthday": new Date(1980, 2, 27), "grade": 1 },
    { "id": 4, "name": "Hardcoded Кирилл", "surname": "Кириллов", "patronymic": "Кириллович", "birthday": new Date(2002, 5, 21), "grade": 3 },
    { "id": 5, "name": "Hardcoded Никита", "surname": "Никитов", "patronymic": "Никитович", "birthday": new Date(1996, 11, 14), "grade": 5 },
    { "id": 6, "name": "Hardcoded Саша", "surname": "Сашев", "patronymic": "Александрович", "birthday": new Date(2008, 7, 7), "grade": 3 },
    { "id": 7, "name": "Hardcoded Юра", "surname": "Юров", "patronymic": "Юрьевич", "birthday": new Date(2017, 6, 3), "grade": 2 },
    { "id": 8, "name": "Hardcoded Денис", "surname": "Денисов", "patronymic": "Денисович", "birthday": new Date(2019, 3, 29), "grade": 1 },
    { "id": 9, "name": "Hardcoded Илья", "surname": "Ильев", "patronymic": "Ильевич", "birthday": new Date(2020, 8, -18), "grade": 4 },
  ];

  addStudent(id: number, name: string, surname: string, patronymic: string, birthday: Date, grade: number): void {
    this.usersInfo.push({ id, name, surname, patronymic, birthday, grade });
  }

  editStudent(id: number, name: string, surname: string, patronymic: string, birthday: Date, grade: number): void {
    this.usersInfo[id].name = name;
    this.usersInfo[id].surname = surname;
    this.usersInfo[id].patronymic = patronymic;
    this.usersInfo[id].birthday = birthday;
    this.usersInfo[id].grade = grade;
  }

}

