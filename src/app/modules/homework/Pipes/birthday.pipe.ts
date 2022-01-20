import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "birthday"
})
export class BirthdayPipe implements PipeTransform {

  zodiacs: string [] = ["Водолей", "Рыбы", "Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец", "Козерог"];

  transform(date: Date): string {
    let zodiac: string = "";
    const newDate = new Date(date);
    if (newDate.getDay() > 20) {
      zodiac = this.zodiacs[newDate.getMonth() + 1];
    } else {
      zodiac = this.zodiacs[newDate.getMonth()];
    }
    const dateWithZodiac = newDate.toLocaleDateString() + "(" + zodiac + ")";
    return dateWithZodiac;
  }

}
