import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from './pages/pages.module';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CoreModule} from '@core/core.module';
import { metaReducers, reducers} from './+state/app.selector';
import {InitializerService} from '@core/service/initializer.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptService} from '@core/service/intercept.service';
import {environment} from '../environments/environment';
import {Environment} from '@core/interface/enviroment.interface';
import {EffectsModule} from '@ngrx/effects';
import {AppEffect} from './+state/app.effect';
import { WaterfallDirective } from './shared/directives/waterfall.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'sm-app'}),
    CoreModule,
    PagesModule,
    RouterModule.forRoot([]),
    /*Redux*/
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffect]),
    // !environment.production ? StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }) : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'routerReducer'
    })
  ],
  providers: [
    InitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (init: InitializerService) => () => init.webLoad(),
      deps: [InitializerService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    },
    {
      provide: Environment,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
