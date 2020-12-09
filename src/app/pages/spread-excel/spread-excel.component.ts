import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Spreadsheet from "x-data-spreadsheet";
import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn.js';
(Spreadsheet as any).locale('zh-cn', zhCN);

@Component({
  selector: 'app-spread-excel',
  templateUrl: './spread-excel.component.html',
  styleUrls: ['./spread-excel.component.scss']
})
export class SpreadExcelComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      new Spreadsheet('#excel-hello-world', {
        showToolbar: true, showGrid: true,
        view: {
          height: () => 600,
          width: () => document.documentElement.clientWidth
        }
      }).loadData([])
    }, 1000)

  }

}
