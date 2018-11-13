import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutingModule} from './pages-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, IndexComponent],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
