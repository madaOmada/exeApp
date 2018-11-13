import {Action} from '@ngrx/store';
import {User} from '../core/interface/user.interface';

/**
 * 应用状态值对应表
 */
export enum AppActionTypes {
  /*about app state*/
  /*应用版本(暂时没用)*/
  AppVersion = '[App Version]',
  /*about user*/
  /*打开登录窗口*/
  OpenLogin = '[Auth Open Login]',
  /*关闭登录窗口*/
  CLoseLogin = '[Auth Close Login]',
  /*登录成功 params:User 更新用户信息*/
  LoginSuccess = '[Auth Login Success]',
  /*退出登录*/
  Logout = '[Auth Logout]'
}

/**
 * 修改对应action对应的type
 * 使用方式: store.dispatch(new Class(params?))
 */
export class AppVersion implements Action {
  readonly type = AppActionTypes.AppVersion;
  constructor(public payload: string) {}
}

export class OpenLogin implements Action {
  readonly type = AppActionTypes.OpenLogin;
}

export class CloseLogin implements Action {
  readonly type = AppActionTypes.CLoseLogin;
}

export class LoginSuccess implements Action {
  readonly type = AppActionTypes.LoginSuccess;
  constructor (public payload: User) {}
}

export class Logout implements Action {
  readonly type = AppActionTypes.Logout;
}

/**
 * 输出类型
 */
export type AppAction = AppVersion
| OpenLogin
| CloseLogin
| LoginSuccess
| Logout;

