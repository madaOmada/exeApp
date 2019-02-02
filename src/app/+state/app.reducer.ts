import {AppAction, AppActionTypes, RemoveCache} from './app.action';
import {AppData} from '@core/interface/app.interface';

/**
 * 默认的APP相关属性
 * @type {{version: string; showLoginModal: boolean; isLogin: boolean; userData: null}}
 */
export const defaultAppData: AppData = {
  version: 'own',
  /*http请求缓存*/
  httpCache: {},
  /*是否展示登录窗口*/
  showLoginModal: false,
  /*是否登录*/
  isLogin: false,
  /*用户相关数据*/
  userData: null
};

/**
 * APP状态处理
 * @param {AppData} state 修改前的值
 * @param {AppAction} action
 * @returns {AppData} 修改后的值
 */
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
    case AppActionTypes.ClearCache:
      return {
        ...state,
        httpCache: {}
      };
    case AppActionTypes.RemoveCache:
      delete state.httpCache[action.payload.key];
      return state;
    case AppActionTypes.AddCache:
      return {
        ...state,
        httpCache: action.payload
      };
    default:
      return state;
  }
}

