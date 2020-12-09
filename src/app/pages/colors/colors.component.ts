import { Component, OnInit } from '@angular/core';
import * as Color from "color";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  baseColor = Color('#e6240f');

  realColors = [
    this.baseColor,
    this.baseColor.saturate(.07).lighten(.523),
    this.baseColor.saturate(.02).darken(.07),
    this.baseColor.saturate(.07).lighten(.445),
    this.baseColor.saturate(.07).lighten(.56),
    this.baseColor.rotate(-.8).desaturate(.42).lighten(.8),
  ];

  colors = [
    Color({h: 218, s: 94, l: 59})/*Color('#347CF9').hsl()*//*皮肤主色*/,
    Color('#cbe2ff').hsl()/*hover 浅色   .saturate(.07).lighten(.523)*/,
    /*Color({h: 214, s: 100, l: 90}).rgb(),*/
    Color('#1e6ffa').hsl()/*hover 深色   .saturate(.02).darken(.07)*/,
    Color('#b5d0ff').hsl()/*我的图片 - 文件夹选中状态 - 深色  .saturate(.07).lighten(.445)*/,
    Color('#d6e5ff').hsl()/*我的图片 - 文件夹选中状态 - 浅色  .saturate(.07).lighten(.56)*/,
  ];

  constructor() { }

  ngOnInit() {
    console.log(Color('#eececb').hsl())
  }

}
