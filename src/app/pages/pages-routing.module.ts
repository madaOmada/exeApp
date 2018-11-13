import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
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
