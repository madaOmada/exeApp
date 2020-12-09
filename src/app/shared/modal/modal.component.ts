import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver, ComponentRef, ElementRef,
  EventEmitter,
  Inject, Injector,
  Input, OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  Type,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {Overlay, OverlayRef, OverlayKeyboardDispatcher, BlockScrollStrategy} from '@angular/cdk/overlay';
import {DOCUMENT} from '@angular/common';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent<T = any> implements OnInit, AfterViewInit, OnDestroy {

  @Input() title: string | TemplateRef<{}>;
  @Input() content: string | TemplateRef<{}> | Type<T>;
  @Input() componentParams: T;

  @Input() closeButton: boolean;
  @Input() mask: boolean = true;
  @Input() maskCloseable: boolean;

  @Output() afterOpen = new EventEmitter<{}>();
  @Output() afterClose = new EventEmitter<{}>();
  @Output() visibleChange = new EventEmitter<{}>();

  @ViewChild('modalBody') modalBody: ElementRef;
  @ViewChild('modalBody', {read: ViewContainerRef}) modalBodyContainer: ViewContainerRef;


  get obAfterClose() {
    return this.afterClose.asObservable();
  }

  private _overlayRef: OverlayRef;
  private contentComponentRef: ComponentRef<T>;
  private previouslyFocusedElement: HTMLElement;
  private transformOrigin: string;

  private visible: boolean;
  private scrollStrategy: BlockScrollStrategy;

  constructor(
    private overlay: Overlay,
    private viewContainer: ViewContainerRef,
    private factory: ComponentFactoryResolver,
    private changeDetector: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.scrollStrategy = this.overlay.scrollStrategies.block()
  }

  ngOnInit() {

    if (this.isComponent(this.content)) {
      this.createDynamicComponent(this.content as Type<T>);
    }
  }

  ngAfterViewInit(): void {
    if (this.contentComponentRef) {
      this.modalBodyContainer.insert(this.contentComponentRef.hostView)
    }
  }

  ngOnDestroy(): void {
  }

  setOverlayRef(overlayRef: OverlayRef) {
    this._overlayRef = overlayRef;
  }

  public isComponent(content: {}): boolean {
    return content instanceof Type;
  }

  private savePreviouslyFocusedElement() {
    if (this.document) {
      this.previouslyFocusedElement = this.document.activeElement as HTMLElement;
    }
  }

  private updateTransformOrigin() {
    if (this.previouslyFocusedElement) {
      const modalEl = this.modalBody.nativeElement.getBoundingClientRect();
      const targetEl = this.previouslyFocusedElement.getBoundingClientRect();
      const x = targetEl.left + targetEl.width / 2 - modalEl.left;
      const y = targetEl.top + targetEl.height / 2 - modalEl.top;
      this.transformOrigin = `${x}px ${y}px 0px`;
    }
  }

  private createDynamicComponent(component: Type<T>) {
    const factory = this.factory.resolveComponentFactory(component);
    const injector = Injector.create({
      providers: [{provide: ModalComponent, useValue: this}],
      parent: this.viewContainer.parentInjector
    });
    this.contentComponentRef = factory.create(injector);

    if (this.componentParams) {
      Object.assign(this.contentComponentRef.instance, this.componentParams)
    }
    this.contentComponentRef.changeDetectorRef.detectChanges()
  }

  private changeVisibleState(visible: boolean, closeResult?): Observable<void> {
    if (visible != this.visible) {
      this.visible = visible;
      this.visibleChange.emit(visible);

      return this.handleVisibleStateChange(visible, true, closeResult)
    }
    return of()
  }

  private handleVisibleStateChange(visible: boolean, animation: boolean = true, closeResult?): Observable<void> {
    if (visible) {
      // Hide scrollbar at the first time when shown up
      this.scrollStrategy.enable();
      this.savePreviouslyFocusedElement();
    }

    return (animation ? this.animate(visible) : of<void>()).pipe(
      tap(() => {
        if (visible) {
          this.afterOpen.emit();
        } else {
          this.afterClose.emit(closeResult);
          this.scrollStrategy.disable();
          // Mark the for check so it can react if the view container is using OnPush change detection.
          this.changeDetector.markForCheck();
        }
      })
    )
  }


  private animate(visible: boolean): Observable<void> {
    if (visible) {
      this.updateTransformOrigin();
      this.modalBody.nativeElement.style.transformOrigin = this.transformOrigin;
    }
    return of()
  }

  open() {
    this.changeVisibleState(true)
  }

  close(result?) {
    this.changeVisibleState(false, result)
  }

  maskClick() {
    if (this.maskCloseable) {

    }
  }
}
