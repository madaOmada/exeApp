import {ctx} from '@core/canvasAction/canvas';

export class Graph {
  x: number;
  y: number;
  points = [];
  sides = 5;
  stars = 5;
  lineWidth = 1;
  strokeStyle = '#000';
  fillStyle = '#f00';
  isFill = false;

  control = -1;

  constructor(pos) {
    this.x = pos.x;
    this.y = pos.y;
  }

  update(pos) {
    if (this.control === 9999) {
      const x1 = pos.x - this.x,
        y1 = pos.y - this.y;
      this.points.forEach(p => {
        p = {x: p.x + x1, y: p.y + y1};
      });
      this.x = Math.round(pos.x);
      this.y = Math.round(pos.y);
    } else {
      this.points[this.control] = pos;
      let x = 0, y = 0;
      this.points.forEach(p => {
        x += p.x;
        y += p.y;
      });
      this.x = Math.round(x / this.points.length);
      this.y = Math.round(y / this.points.length);
    }
  }

  createPath() {
    ctx.beginPath();
    this.points.forEach((p, i) => {
      ctx[i === 0 ? 'moveTo' : 'lineTo'](p.x, p.y);
    });
    ctx.closePath();
  }

  /**
   * 指定坐标 在元素点的 索引
   * @param pos
   * @returns {number}
   */
  isInPath(pos) {
    for (let i = 0, point, len = this.points.length; i < len; i++) {
      point = this.points[i];
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2, false);
      if (ctx.isPointInPath(pos.x, pos.y)) {
        this.control = i;
        return i;
      }
    }
    this.createPath();
    if (ctx.isPointInPath(pos.x, pos.y)) {
      this.control = 9999;
      return 9999;
    }
    this.control = -1;
    return -1;
  }

  /**
   * 画控制器
   */
  drawController() {
    this.drawPoints();
    this.drawCenter();
  }

  /**
   * 画控制点
   */
  drawPoints() {
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#999';
    this.points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2, false);
      ctx.stroke();
    });
    ctx.restore();
  }

  /**
   * 画中心位移控制点
   */
  drawCenter() {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'hsla(60,100%,45%,1)';
    ctx.fillStyle = 'hsla(60,100%,50%,1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  draw() {
    ctx.save();
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.strokeStyle;
    ctx.fillStyle = this.fillStyle;
    this.createPath();
    ctx.stroke();
    if (this.isFill) {
      ctx.fill();
    }
    ctx.restore();
  }
}
