import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CanvasService} from '@core/service/canvas.service';
import {Graph} from '@core/canvasAction/graph';
import {canvas, ElementType} from '@core/canvasAction/canvas';

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
    this.cv.initListen();
  }

  ngOnDestroy(): void {
    this.cv.removeListen()
  }

  createElement(type: ElementType) {
    this.cv.createElement(type);
  }

}
