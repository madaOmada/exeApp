import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './+state/app.reducer';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CoreModule} from '@core/core.module';

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
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
