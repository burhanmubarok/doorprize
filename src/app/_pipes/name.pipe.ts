import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length == 0) return value;
    let words = value.split(" ");
    let newWords = [];
    words.forEach(element => {
      newWords.push(element.charAt(0).toUpperCase() + element.substr(1).toLowerCase());
    });
    return newWords;
  }

}
