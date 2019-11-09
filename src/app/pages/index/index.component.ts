import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import Handsontable from 'handsontable';
import {RouterReducerState} from '@ngrx/router-store';
import {UserService} from '@core/service/user.service';
import {HotTableRegisterer} from '@handsontable/angular';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [HotTableRegisterer]
})
export class IndexComponent implements OnInit, AfterViewInit {
  image = '//image.tubangzhu.net/updata/201908/13/7a6add494b7a16ce00c8.png';
  setting = {
    data: [
      {id: 1, name: 'Ted Right', address: 'Wall Street'},
      {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
      {id: 3, name: 'Joan Well', address: 'Broadway'},
      {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
      {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
      {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
      {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
      {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
    ],
    contextMenu: true,
    rowHeaders: true,
    colHeaders: true,
    afterInit: () => {
      this.table = this.hot.getInstance('haha');
    }
  };

  scrollHeight = 1000;

  table: Handsontable;

  constructor(
    private store: Store<RouterReducerState>,
    private userS: UserService,
    private hot: HotTableRegisterer,
    @Inject(DOCUMENT) private document
  ) {
  }

  ngOnInit() {

  }

  test() {
    this.userS.login().subscribe(data => {
      console.log('clickLogin', data);
    });
  }

  touch() {
    console.log(this.table.getSettings());
  }

  onScrollDown() {
    this.scrollHeight += 100;
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

  ngAfterViewInit() {
  }
}
