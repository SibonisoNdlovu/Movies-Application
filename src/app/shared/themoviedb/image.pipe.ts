import { Pipe, PipeTransform } from '@angular/core';
import { devEnvironment } from '../../../environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(value: string, width: number): string {
    return value
      ? `${devEnvironment.themoviedb.imageUrl}/w${width}${value}?api_key=${
        devEnvironment.themoviedb.apiKey
        }`
      : '/assets/images/poster-placeholder.png';
  }
}
