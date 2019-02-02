import {User} from './user.interface';

export interface AppData {
  version: string;
  httpCache: {[key: string]: any};
  showLoginModal: boolean;
  isLogin: boolean;
  userData: User;
}

export interface Cache {
  [x: string]: any;
}
