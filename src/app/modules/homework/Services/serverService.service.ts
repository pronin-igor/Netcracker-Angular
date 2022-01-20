import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

export interface MyObj {
  users: [];
}


@Injectable({
  providedIn: "root"
})
export class ServerService {

  constructor(private httpClient: HttpClient) {
    this.stringVar = new Subject<string>();
    this.stringVar$ = this.stringVar.asObservable();
    this.getDeals().subscribe((data) => {
        this.usersInfo = data.users;
        this.stringVar.next("");
    });
  }

  stringVar;
  stringVar$;

  usersInfo: { birthday: Date, patronymic: string, surname: string, grade: number, name: string, id: number }[] = [];

  getDeals(): Observable<MyObj> {
    return this.httpClient.get<MyObj>("http://localhost:3000");
  }

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
