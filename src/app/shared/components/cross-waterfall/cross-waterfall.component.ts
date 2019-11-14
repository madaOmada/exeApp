import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ImageFile, WaterFile} from '@core/interface/file.interface';
import {SimpleChanges} from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-cross-waterfall',
  templateUrl: './cross-waterfall.component.html',
  styleUrls: ['./cross-waterfall.component.scss']
})
export class CrossWaterfallComponent implements OnInit, OnChanges {
  // item 组件
  @Input() child;
  // 数据
  @Input() list: ImageFile[];
  @Input() fixHeight = 30;
  // 容器宽度
  @Input() ClientWidth: number;
  // 横向间距
  @Input() getterX = 8;
  // 竖向间距
  @Input() getterY = 8;

  // 处理后的列表数据
  render: WaterFile[] = [];
  // 总高度
  ClientHeight = 0;

  // 记录渲染索引
  renderIndex: number;

  // 每行基准个数 （根据实际比例增减）
  column: number = 5;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.list && changes.list.currentValue ||
      changes.ClientWidth && !changes.ClientWidth.firstChange
    ) {
      this.calculate();
    }
  }

  calculate() {
    this.render = [];
    this.ClientHeight = 0;
    this.renderIndex = 0;

    this.renderLine();
  }

  renderLine() {
    const {list, renderIndex, column, ClientWidth, getterX, getterY} = this,
      newList: WaterFile[] = [];
    let radio = 0, left = 0;

    // 入选item
    for (let i = renderIndex, len = list.length; i < len; i++) {
      radio += list[i].width / list[i].height;
      newList.push({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        file: list[i]
      });
      if (radio - column > -0.5 || newList.length > column || i == len - 1) {
        this.renderIndex = i + 1;
        break;
      }
    }
    // 当前行高度
    const height = radio / column < 0.6 ? ClientWidth / column : (ClientWidth - (newList.length - 1) * getterX) / radio;
    // 计算宽高定位
    for (let item of newList) {
      item.width = item.file.width / item.file.height * height;
      item.height = height;
      item.top = this.ClientHeight;
      item.left = left;
      left += item.width + getterX;
    }

    this.render.push(...newList);
    // 总高加上当前行高
    this.ClientHeight += height + getterY;

    if (this.list[this.renderIndex]) {
      this.renderLine();
    }
  }

}
