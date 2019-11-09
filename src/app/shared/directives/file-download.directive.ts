import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
  selector: '[appFileDownload]'
})
export class FileDownloadDirective implements OnChanges {
  @Input() type: string;
  @Input() value: any;

  constructor(
    private element: ElementRef,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.value && change.value.currentValue) {
      this.download();
    }
  }


  download() {
    if (this.type === 'image') {
      this.image2blob(this.value);
    } else if (this.type === 'text') {
      this.text2blob(this.value);
    }
  }

  text2blob(value) {
    const blob = new Blob([value], {type: 'text/plain;charset=utf-8'});
    this.blob2url(blob);
  }

  image2blob(value) {
    const image = new Image();
    // 解决图片路径跨域问题
    image.crossOrigin = 'anonymous';
    image.addEventListener('load', () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height);
      // canvas转二进制
      canvas.toBlob(blob => this.blob2url(blob));
    });
    image.src = value;
  }

  blob2url(blob: Blob) {
    // this.sanitizer.bypassSecurityTrustResourceUrl()
    this.element.nativeElement.href = URL.createObjectURL(blob);
  }
}
