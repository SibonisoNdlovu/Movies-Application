import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export function slideLeft(translateX: number = 100, duration: number = 400) {
  return trigger('slideLeft', [
    transition(':enter', [
      animate(`${duration}ms`, keyframes([
        style({ transform: `translateX(${translateX}%)` }),
        style({ transform: 'translateX(0)' })
      ]))
    ])
  ]);
}



