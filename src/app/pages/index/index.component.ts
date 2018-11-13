import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {
  swiper: Swiper;
  slides = [
    'https://via.placeholder.com/1000x300/00A2EB/ffffff',
    'https://via.placeholder.com/1000x300/333333/ffffff',
    'https://via.placeholder.com/1000x300/900C3F/ffffff'
  ];
  constructor() {
  }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }
}
