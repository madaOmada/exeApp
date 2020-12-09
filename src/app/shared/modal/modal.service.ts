import {ComponentRef, EventEmitter, Injectable, TemplateRef, Type} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';

export class ModalBuilder {
  private _modalRef: ComponentRef<ModalComponent>;
  private _overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    options = {}
  ) {
    this._createModal();

    this._changeOptions(options);

    this._modalRef.instance.setOverlayRef(this._overlayRef);
    this._modalRef.instance.afterClose.subscribe(() => this.destroyModal())
  }

  getInstance() {
    return this._modalRef && this._modalRef.instance;
  }

  private _changeOptions(options) {
    if (this._modalRef) {
      Object.assign(this._modalRef.instance, options);
    }
  }

  destroyModal(): void {
    if (this._modalRef) {
      this._overlayRef.dispose();
      this._modalRef = null;
    }
  }

  private _createModal() {
    this._overlayRef = this.overlay.create();
    this._modalRef = this._overlayRef.attach(new ComponentPortal(ModalComponent));
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private overlay: Overlay,
  ) {}

  create(options) {
    return new ModalBuilder(this.overlay, options).getInstance();
  }
}
