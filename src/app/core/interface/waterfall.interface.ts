import {ImageFile} from '@core/interface/file.interface';
import {EventEmitter} from '@angular/core';

export interface WaterfallItem {
  file: ImageFile;
  action: EventEmitter<{method: string, data: any}>
}
