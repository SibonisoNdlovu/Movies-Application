import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export function slideRight(translateX: number = -100, duration: number = 400) {
  return trigger('slideRight', [
    transition(':enter', [
      animate(`${duration}ms`, keyframes([
        style({ transform: `translateX(${translateX}%)` }),
        style({ transform: 'translateX(0)' })
      ]))
    ])
  ]);
}



