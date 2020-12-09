import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CanvasService} from '@core/service/canvas.service';
import {Graph} from '@core/canvasAction/graph';
import {canvas, ctx, ElementType} from '@core/canvasAction/canvas';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {

  @ViewChild('canvas') canvasRoom: ElementRef;

  constructor(
    private cv: CanvasService
  ) {
  }

  ngOnInit() {
    this.canvasRoom.nativeElement.appendChild(canvas);
    setTimeout(() => {
      ctx.lineCap = 'round';
      ctx.lineWidth = 10;
      // ctx.fillStyle = '#00a2eb'
      ctx.strokeStyle = '#00a2eb';
      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(100, 100);
      ctx.closePath();
      ctx.stroke();
      ctx.strokeStyle = '#d21633';
      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();
      ctx.moveTo(10,10);
      ctx.lineTo(20,50);
      // ctx.closePath();
      ctx.stroke();
      // ctx.moveTo(50,50);
      ctx.lineTo(70,30);
      // ctx.closePath();
      ctx.stroke();
    }, 1000);
    // this.cv.initListen();
  }

  mouseDown(e) {
    console.log(e)
  }

  mouseMove(e) {

  }

  ngOnDestroy(): void {
    this.cv.removeListen()
  }

  createElement(type: ElementType) {
    this.cv.createElement(type);
  }

}
