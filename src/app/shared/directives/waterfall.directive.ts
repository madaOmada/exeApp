import {ComponentFactoryResolver, Directive, EventEmitter, Input, OnInit, Output, ViewContainerRef} from '@angular/core';
import {WaterfallItem} from '@core/interface/waterfall.interface';
import {ImageFile} from '@core/interface/file.interface';

@Directive({
  selector: '[appWaterfall]'
})
export class WaterfallDirective implements OnInit {
  @Input() child;
  @Input() file: ImageFile;
  @Output() action = new EventEmitter<{method: string, data: any}>();
  constructor(
    private container: ViewContainerRef,
    private factory: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.container.clear();
    const factory = this.factory.resolveComponentFactory<WaterfallItem>(this.child);
    const component = this.container.createComponent<WaterfallItem>(factory);

    component.instance.file = this.file;
    component.instance.action.subscribe(data => this.action.emit(data))
  }
}
