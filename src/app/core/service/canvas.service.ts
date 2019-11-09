import {Injectable, OnInit} from '@angular/core';
import {canvas, ElementType} from '@core/canvasAction/canvas';
import {domCenter, mapPosition} from '@core/util/common';
import {Graph} from '@core/canvasAction/graph';
import {Line} from '@core/canvasAction/line';

@Injectable({
  providedIn: 'root'
})
export class CanvasService implements OnInit {
  shapes: Graph[] = [];
  activeShape: Graph;

  constructor() {
  }

  ngOnInit() {
  }

  initListen() {
    canvas.addEventListener('mousedown', this.mouseDown, false);
    canvas.addEventListener('mouseup', this.mouseUp, false);
  }

  removeListen() {
    canvas.removeEventListener('mousedown', this.mouseDown, false);
    canvas.removeEventListener('mouseup', this.mouseUp, false);
    canvas.removeEventListener('mousemove', this.mouseMove, false);
  }

  mouseDown(ev) {
    const pos = mapPosition(canvas, ev);
    // 点中控制器的元素
    this.activeShape = this.shapes.find(shape => shape.isInPath(pos) > -1);
    // 改变鼠标手势
    if (this.activeShape) {
      canvas.style.cursor = 'crosshair';

      // 监听拖动控制器
      canvas.addEventListener('mousemove', this.mouseMove, false);
    }
  }

  mouseMove(ev) {
    const pos = mapPosition(canvas, ev);
    if (this.activeShape) {
      this.activeShape.update(pos);
      this.drawElements();
    }
  }

  mouseUp() {
    canvas.style.cursor = 'pointer';
    canvas.removeEventListener('mousemove', this.mouseMove, false);
  }

  createElement(type: ElementType) {
    const centerPos = domCenter(canvas);
    if (type === 'line') {
      this.shapes.push(new Line(centerPos));
    }
    this.drawElements();
  }

  drawElements() {
    this.shapes.forEach(shape => {
      shape.draw();
      if (shape === this.activeShape) {
        shape.drawController();
      }
    });
  }
}
