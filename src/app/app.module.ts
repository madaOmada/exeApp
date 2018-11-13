import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './+state/app.reducer';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {MetaLoader, MetaModule} from '@ngx-meta/core';
import {MetaService} from './core/service/meta.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    PagesModule,
    RouterModule.forRoot([]),
    /*Redux*/
    StoreModule.forRoot({
      appReducer,
      routerReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    /*meta for tdk*/
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: ((metaService: MetaService) => metaService.metaFactory()),
      deps: [MetaService]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
