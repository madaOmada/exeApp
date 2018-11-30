import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {IndexComponent} from './index/index.component';
import {MetaGuard} from '@ngx-meta/core';

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
