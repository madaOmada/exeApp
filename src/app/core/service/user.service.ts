import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {apiUserLogin} from '@core/api/user.api';
import {User} from '@core/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(): Observable<User> {
    return this.http.post<User>(apiUserLogin, { mobile: '15954880813', password: 'wf00505338'},{headers: {'do-cache': 'do-cache'}});
  }
}
