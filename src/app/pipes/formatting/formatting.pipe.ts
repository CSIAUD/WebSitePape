import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatting'
})
export class FormattingPipe implements PipeTransform {

  transform(str: string): string {
      return (str.split("\n")).join("<br>");
  }

}
