import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CrossWaterfallComponent } from './components/cross-waterfall/cross-waterfall.component';

const COMPONENTS = [
  HeaderComponent,
  CrossWaterfallComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [
    CommonModule,
    ...COMPONENTS
  ]
})
export class SharedModule { }
