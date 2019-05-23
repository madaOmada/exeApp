import {createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {AppData} from '@core/interface/app.interface';
import {environment} from '../../environments/environment';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store/src/models';
import {appReducer} from './app.reducer';

export interface AppState {
  app: AppData;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  app: appReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [storeFreeze];

/**
 * 监听APP相应的状态值
 * @type {MemoizedSelector<object, AppData>}
 */
export const selectAppState = createFeatureSelector<AppData>('app');
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

export const selectHttpCache = createSelector(
  selectAppState,
  (state: AppData) => state.httpCache
);


/**
 * 路由的相关selector
 * @type {MemoizedSelector<object, RouterReducerState>}
 */
export const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const selectRouterUrl = createSelector(
  selectRouter,
  (route: RouterReducerState) => route.state.url
);
export const selectRouterParams = createSelector(
  selectRouter,
  (route: RouterReducerState) => route.state.root.params
);
