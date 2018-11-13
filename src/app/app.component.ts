import {Component, OnInit} from '@angular/core';
import {NgProgress} from '@ngx-progressbar/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress></ng-progress>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(public progress: NgProgress) {
  }

  ngOnInit() {

  }
}
