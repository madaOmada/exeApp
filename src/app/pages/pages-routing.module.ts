import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {IndexComponent} from './index/index.component';
import {MetaGuard} from '@ngx-meta/core';
import {EditorComponent} from './editor/editor.component';

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
