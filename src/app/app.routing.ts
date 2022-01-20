import { Routes, RouterModule } from "@angular/router";
import { StudentsTableComponent } from "./modules/homework/studentsTable/studentsTable.component";
import { PageNotFoundComponent } from "./modules/homework/pageNotFound/pageNotFound.component";
import { GuardForGradeGuard } from "./modules/homework/guards/guard-for-grade.guard";

const routes: Routes = [
  { path: "", component: StudentsTableComponent },
  { path: "action/addStudent", component: StudentsTableComponent },
  { path: "action/editStudent/:id", component: StudentsTableComponent, canActivate: [GuardForGradeGuard] },
  { path: "**", component: PageNotFoundComponent },
];
export const routing = RouterModule.forRoot(routes);
