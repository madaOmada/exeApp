import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppVersion} from '../../+state/app.action';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(private store: Store<any>) {
  }

  webLoad(): Promise<any> {
    return new Promise(resolve => {
      // this.store.dispatch(new AppVersion('1.0.0'));
      resolve(null);
    });
  }
}
