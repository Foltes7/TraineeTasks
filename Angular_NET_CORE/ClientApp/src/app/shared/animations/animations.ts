import { animate, style, transition, trigger } from '@angular/animations';


export const SmoothAppearance = trigger('smoothAppearance', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('0.3s ease', style({ opacity: 1})),
    ]),
    transition(':leave', [
      animate('0.3s ease', style({ opacity: 0 }))
    ])
  ]);
