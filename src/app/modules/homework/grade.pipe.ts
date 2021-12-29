import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "grade"
})
export class GradePipe implements PipeTransform {

  transform(grade: number): string {
    if (grade >= 4) {
      return (grade + "👍🏻");
    }
      return (grade + "👎🏻");

  }

}
