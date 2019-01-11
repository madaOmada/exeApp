import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {StoreModule} from '@ngrx/store';
import { StoreRouterConnectingModule} from '@ngrx/router-store';
import {CoreModule} from '@core/core.module';
import { metaReducers, reducers} from './+state/app.selector';
import {InitializerService} from '@core/service/initializer.service';

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
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    InitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (init: InitializerService) => init.webLoad,
      deps: [InitializerService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
