import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export function spin(duration: number = 200) {
  return trigger('spin', [
    transition('* => show', [
      animate(`${duration}ms`, keyframes([
        style({ transform: 'rotate(0)' }),
        style({ transform: 'rotate(90deg)' })
      ]))
    ])
  ]);
}
