import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppActionTypes} from './app.action';
import {tap} from 'rxjs/internal/operators';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable()
export class AppEffect {

  constructor(
    private action$: Actions,
    private local: LocalStorage
  ) {
  }

  /**
   * 登录监听
   * @action 记录本地user信息
   * @type {Observable<any>}
   */
  @Effect()
  loginSuccess$ = this.action$.pipe(
    ofType(AppActionTypes.LoginSuccess),
    tap(action => {
      console.log(action);
    })
  );

  /**
   * 退出登录监听
   * @action 清除本地记录user信息
   * @type {Observable<any>}
   */
  @Effect()
  logout$ = this.action$.pipe(
    ofType(AppActionTypes.Logout),
    tap(action => {
      console.log(action);
    })
  );
}
