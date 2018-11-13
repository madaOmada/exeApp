import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
