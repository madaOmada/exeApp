import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageFile} from '@core/interface/file.interface';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.scss']
})
export class TemplateItemComponent implements OnInit {
  @Input() file: ImageFile;

  @Output() action = new EventEmitter<{method: string, data: any}>();
  constructor() { }

  ngOnInit() {
  }

}
