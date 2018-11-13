import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressRouterModule} from '@ngx-progressbar/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MetaLoader, MetaModule} from '@ngx-meta/core';
import {MetaService} from './service/meta.service';

@NgModule({
  imports: [
    CommonModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    NgZorroAntdModule,
  ],
  providers: [MetaService],
  exports: [
    NgProgressModule,
    NgProgressRouterModule,
    NgZorroAntdModule,
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('核心模块，不可重复加载！');
    }
  }
}
