import {animate, animation, style} from '@angular/animations';

export const fadeIn = animation(
  [
    style({opacity: 0, right: '384px'}),
    animate(
      '200ms',
      style({opacity: 1, right: '0'})
    )
  ],
  {}
)
