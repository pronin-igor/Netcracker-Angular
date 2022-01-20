import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ServerService } from "../Services/serverService.service";
import { HardcodedService } from "../Services/hardcodedService.service";

@Injectable({
  providedIn: "root"
})
export class GuardForGradeGuard implements CanActivate {
  constructor(private serverService: ServerService, private hardcodedService: HardcodedService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    const id = route.params["id"];
    const idNumber = Number(id);
    if (route.queryParams["debug"] === "true") {
      if (this.hardcodedService.usersInfo[idNumber].grade < 5) {
        return true;
      }
    } else {
      if (this.serverService.usersInfo[idNumber].grade < 5) {
        return true;
      }
    }
    return confirm("Пользователя с такой оценкой нельзя редактировать, но если очень хочется...");
  }
}
