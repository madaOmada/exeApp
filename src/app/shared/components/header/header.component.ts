import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _modal: NzModalService
  ) { }

  ngOnInit() {
  }

  loginModal() {
    setTimeout(() => {
      this._modal.create({
        nzTitle: '哈哈',
        nzContent: '呵呵',
        nzClosable: true,
      })
    }, 1000)
  }

}
