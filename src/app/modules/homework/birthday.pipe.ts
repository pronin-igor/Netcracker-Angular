import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "birthday"
})
export class BirthdayPipe implements PipeTransform {

  zodiacs: string [] = ["Водолей", "Рыбы", "Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог"];

  transform(date: Date): string {
    let zodiac: string = "";
    if (date.getDay() > 20) {
      zodiac = this.zodiacs[date.getMonth() + 1];
    } else {
      zodiac = this.zodiacs[date.getMonth()];
    }
    const dateWithZodiac = date.toLocaleDateString() + "(" + zodiac + ")";
    return dateWithZodiac;
  }

}
