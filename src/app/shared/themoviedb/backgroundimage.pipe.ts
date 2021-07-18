import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backgroundimage'
})
export class BackgroundimagePipe implements PipeTransform {

  transform(value: string): string {
    return `url(${value})`;
  }
}
