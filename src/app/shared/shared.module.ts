import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CrossWaterfallComponent } from './components/cross-waterfall/cross-waterfall.component';
import {FileDownloadDirective} from './directives/file-download.directive';
import {TemplateItemComponent} from './components/template-item/template-item.component';
import {WaterfallDirective} from './directives/waterfall.directive';
import {ModalModule} from './modal/modal.module';

const COMPONENTS = [
  HeaderComponent,
  CrossWaterfallComponent,
  TemplateItemComponent
];

const Directives = [
  FileDownloadDirective,
  WaterfallDirective
];

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [
    ...COMPONENTS,
    ...Directives
  ],
  exports: [
    CommonModule,
    ModalModule,
    ...COMPONENTS,
    ...Directives
  ],
  entryComponents: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
