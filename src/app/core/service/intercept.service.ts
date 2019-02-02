import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {HttpHandler} from '@angular/common/http/src/backend';
import {Observable, of} from 'rxjs';
import {HttpRequest} from '@angular/common/http/src/request';
import {mergeMap, switchMap} from 'rxjs/internal/operators';
import {Environment} from '@core/interface/enviroment.interface';
import {select, Store} from '@ngrx/store';
import {selectHttpCache} from '../../+state/app.selector';
import {AddCache} from '../../+state/app.action';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(
    private env: Environment,
    private store: Store<any>
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return this.store.pipe(
          select(selectHttpCache),
          switchMap(data => {
              console.log('cacheStore', data);
              if (data[req.urlWithParams]) {
                  return of(data[req.urlWithParams]);
              } else {
                  return next.handle(req.clone({
                    url: req.url.match(/(?:http|https)/) ? req.url : this.env.host + '/' + this.env.version + req.url,
                    headers: req.headers.set('handle', this.env.handle).set('client', this.env.client),
                    body: req.body,
                    withCredentials: true
                  }));
              }
          }),
          mergeMap(data => {
              if (data instanceof HttpResponse) {
                  this.store.dispatch(new AddCache({[req.urlWithParams]: data.body.data}));
                  return of(data.clone({
                    body: data.body.data
                  }));
              } else {
                  return of(data);
              }
          })
      );
  }
}
