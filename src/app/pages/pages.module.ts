import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {PagesRoutingModule} from './pages-routing.module';
import { IndexComponent } from './index/index.component';
import {HotTableModule} from '@handsontable/angular';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { EditorComponent } from './editor/editor.component';
import { ColorsComponent } from './colors/colors.component';
import { SpreadExcelComponent } from './spread-excel/spread-excel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    HotTableModule,
    InfiniteScrollModule
  ],
  declarations: [PagesComponent, IndexComponent, EditorComponent, ColorsComponent, SpreadExcelComponent],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
