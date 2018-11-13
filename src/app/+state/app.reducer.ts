import {AppData} from '../core/interface/app.interface';
import {AppAction, AppActionTypes} from './app.action';

export const defaultAppData: AppData = {
  version: 'own',
  /*是否展示登录窗口*/
  showLoginModal: false,
  /*是否登录*/
  isLogin: false,
  /*用户相关数据*/
  userData: null
}

export function appReducer(state = defaultAppData, action: AppAction): AppData {
  switch (action.type) {
    case AppActionTypes.AppVersion:
      return {
        ...state,
        version: action.payload
      };
    case AppActionTypes.OpenLogin:
      return {
        ...state,
        showLoginModal: true
      };
    case AppActionTypes.CLoseLogin:
      return {
        ...state,
        showLoginModal: false
      };
    case AppActionTypes.LoginSuccess:
      return {
        ...state,
        isLogin: true,
        userData: action.payload
      };
    case AppActionTypes.Logout:
      return {
        ...state,
        isLogin: false,
        userData: null
      };
  }
}
