import {Graph} from '@core/canvasAction/graph';

export class Line extends Graph {
  type = 'line';

  constructor(pos) {
    super(pos);
  }

  initPos(pos) {
    this.points = [
      {
        x: pos.x - 10,
        y: pos.y
      },
      {
        x: pos.x + 10,
        y: pos.y
      }
    ];
  }

}
