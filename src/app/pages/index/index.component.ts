import {AfterViewInit, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectLoginModal, selectRouterUrl, selectUserData} from '../../+state/app.selector';
import {RouterReducerState} from '@ngrx/router-store';
import {UserService} from '@core/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  swiper: Swiper;

  constructor(
    private store: Store<RouterReducerState>,
    private userS: UserService
  ) {
  }

  ngOnInit() {}

  test() {
    this.userS.login().subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewInit() {}
}
