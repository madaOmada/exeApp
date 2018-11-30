import {AppData} from '../core/interface/app.interface';
import {AppAction, AppActionTypes} from './app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

/**
 * 默认的APP相关属性
 * @type {{version: string; showLoginModal: boolean; isLogin: boolean; userData: null}}
 */
export const defaultAppData: AppData = {
  version: 'own',
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
  }
}

/**
 * 监听APP相应的状态值
 * @type {MemoizedSelector<object, AppData>}
 */
export const selectAppState = createFeatureSelector<AppData>('appReducer');
/*登陆框状态变化*/
export const selectLoginModal = createSelector(
  selectAppState,
  (state: AppData) => state.showLoginModal
);
/*用户数据变化*/
export const selectUserData = createSelector(
  selectAppState,
  (state: AppData) => state.userData
);
