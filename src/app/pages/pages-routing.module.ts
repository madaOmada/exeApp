import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {IndexComponent} from './index/index.component';
import {MetaGuard} from '@ngx-meta/core';
import {EditorComponent} from './editor/editor.component';
import {ColorsComponent} from './colors/colors.component';
import {SpreadExcelComponent} from './spread-excel/spread-excel.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [MetaGuard],
    canActivateChild: [MetaGuard],
    component: PagesComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
        data: {}
      },
      {
        path: 'canvas',
        component: EditorComponent,
        data: {}
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {}
      },
      {
        path: 'excel',
        component: SpreadExcelComponent,
        data: {}
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {
}
