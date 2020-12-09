import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';
import {ModalComponent} from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    ModalComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ModalModule { }
