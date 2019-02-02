import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUserLogin} from '@core/api/user.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(): Observable<any> {
    return this.http.post(apiUserLogin, { mobile: '15954880813', password: 'wf00505338'});
  }
}
