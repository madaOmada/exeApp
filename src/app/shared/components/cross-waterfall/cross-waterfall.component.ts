import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageFile, WaterFile} from '@core/interface/file.interface';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-cross-waterfall',
  templateUrl: './cross-waterfall.component.html',
  styleUrls: ['./cross-waterfall.component.scss']
})
export class CrossWaterfallComponent implements OnInit, OnChanges {
  @Input() child;
  @Input() list: ImageFile[];
  @Input() height = [300, 400];
  @Input() fixHeight = 30;
  @Input() ClientWidth: number;
  @Input() getterX = 8;
  @Input() getterY = 8;

  render: WaterFile[] = [];
  ClientHeight = 0;

  constructor() {
  }

  ngOnInit() {
    this.calculate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.list && !changes.list.firstChange) {
      this.calculate();
    }
  }

  calculate() {

  }

}
