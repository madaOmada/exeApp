import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppVersion, LoginSuccess} from '../../+state/app.action';
import {UserService} from '@core/service/user.service';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {switchMap, tap} from 'rxjs/internal/operators';
import {AppData} from '@core/interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(
    private store: Store<AppData>,
    private user: UserService,
    private local: LocalStorage
  ) {
  }

  /**
   * 应用初始化登录状态验证
   * @returns {Promise<any>}
   */
  webLoad(): Promise<any> {
    return new Promise(resolve => {
      console.log('webload');
      this.local.getItem('_user').subscribe(data => {
        if (data) { this.store.dispatch(new LoginSuccess(data)); }
      });
      resolve(null);
    });
  }
}
