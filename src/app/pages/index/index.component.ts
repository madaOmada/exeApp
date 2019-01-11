import {AfterViewInit, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectLoginModal, selectRouterUrl, selectUserData} from '../../+state/app.selector';
import {RouterReducerState} from '@ngrx/router-store';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  swiper: Swiper;

  constructor(
    private store: Store<RouterReducerState>
  ) {
  }

  ngOnInit() {
    this.store.pipe(
      select(selectRouterUrl)
    ).subscribe(url => console.log(url));
    this.store.pipe(
      select(selectUserData)
    ).subscribe(data => {
      console.log(data);
    });
  }

  ngAfterViewInit() {}
}
