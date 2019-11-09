import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CrossWaterfallComponent } from './components/cross-waterfall/cross-waterfall.component';
import {FileDownloadDirective} from './directives/file-download.directive';

const COMPONENTS = [
  HeaderComponent,
  CrossWaterfallComponent
];

const Directives = [
  FileDownloadDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS,
    ...Directives
  ],
  exports: [
    CommonModule,
    ...COMPONENTS,
    ...Directives
  ]
})
export class SharedModule { }
