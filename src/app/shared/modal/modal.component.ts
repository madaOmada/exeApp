import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { OverlayRef, OverlayKeyboardDispatcher } from '@angular/cdk/overlay'
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() _afterClose = new EventEmitter<{}>();


  get afterClose() {
    return this._afterClose.asObservable()
  }

  private _overlayRef: OverlayRef;
  private previouslyFocusedElement: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
  }

  setOverlayRef(overlayRef: OverlayRef) {
    this._overlayRef = overlayRef
  }

  private savePreviouslyFocusedElement() {
    if (this.document) {
      this.previouslyFocusedElement = this.document.activeElement as HTMLElement;
    }
  }

  private updateTransformOrigin() {

  }
}
