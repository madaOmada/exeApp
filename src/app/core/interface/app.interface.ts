import {User} from './user.interface';

export interface AppData {
  version: string;
  showLoginModal: boolean;
  isLogin: boolean;
  userData: User;
}
