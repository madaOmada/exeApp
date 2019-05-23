import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppActionTypes, LoginSuccess} from './app.action';
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
  @Effect({dispatch: false})
  loginSuccess$ = this.action$.pipe(
    ofType<LoginSuccess>(AppActionTypes.LoginSuccess),
    tap(action => {
      this.local.setItem('_user', action.payload);
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
    tap(() => {
      this.local.removeItem('_user');
    })
  );
}
