import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppVersion} from '../../+state/app.action';
import {UserService} from '@core/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(
    private store: Store<any>,
    private user: UserService
  ) {
  }

  webLoad(): Promise<any> {
    return new Promise(resolve => {
      this.user.login().subscribe();
      // this.store.dispatch(new AppVersion('1.0.0'));
      resolve(null);
    });
  }
}
