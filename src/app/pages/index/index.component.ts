import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import Handsontable from 'handsontable';
import {RouterReducerState} from '@ngrx/router-store';
import {UserService} from '@core/service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  dataSet = [
    {id: 1, name: 'Ted Right', address: 'Wall Street'},
    {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
    {id: 3, name: 'Joan Well', address: 'Broadway'},
    {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
    {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
    {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
    {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
    {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  ];
  setting = Handsontable.DefaultSettings;
  languages = Handsontable.languages.getLanguagesDictionaries();
  constructor(
    private store: Store<RouterReducerState>,
    private userS: UserService
  ) {
  }

  ngOnInit() {
    Handsontable.languages.registerLanguageDictionary({languageCode: 'zh-CN'}, {languageCode: 'zh-CN'});
    console.log(Handsontable.languages.getLanguagesDictionaries());
  }

  test() {
    this.userS.login().subscribe(data => {
      console.log('clickLogin', data);
    });
  }

  ngAfterViewInit() {}
}
