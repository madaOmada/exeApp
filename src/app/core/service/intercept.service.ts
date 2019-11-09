import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http/src/response';
import {HttpHandler} from '@angular/common/http/src/backend';
import {Observable, of} from 'rxjs';
import {HttpRequest} from '@angular/common/http/src/request';
import {map, mergeMap, switchMap, take} from 'rxjs/internal/operators';
import {Environment} from '@core/interface/enviroment.interface';
import {select, State, Store} from '@ngrx/store';
import {AddCache} from '../../+state/app.action';
import {AppData} from '@core/interface/app.interface';
import {selectHttpCache} from '../../+state/app.selector';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor(
    private state: State<AppData>,
    private env: Environment,
    private store: Store<AppData>
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cacheKey = req.method + req.urlWithParams, doCache = req.headers.has('do-cache');
    return this.store.pipe(
      select(selectHttpCache),
      take(1),
      switchMap(caches => {
        if (caches[cacheKey] && doCache) {
          return of(caches[cacheKey]);
        } else {
          const request = req.clone({
            url: req.url.match(/(?:http|https)/) ? req.url : this.env.host + '/' + this.env.version + req.url,
            headers: req.headers.set('handle', this.env.handle).set('client', this.env.client),
            body: req.body,
            withCredentials: true
          });

          return next.handle(request);
        }
      }),
      mergeMap(event => {
        if (event instanceof HttpResponse) {
          doCache && this.store.dispatch(new AddCache({[cacheKey]: event.body.data}));
          return of(event.clone({
            body: event.body.data
          }));
        } else {
          return of(new HttpResponse({
            body: event
          }));
        }
      })
    );


  }
}
