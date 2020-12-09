import jsQR, {QRCode} from 'jsqr';
import { Observable } from 'rxjs';


/**
 * 识别图片中的二维码
 * @param file 图片文件
 */
export function scan(file: File): Observable<QRCode | null> {
  return Observable.create(observer => {
    const reader = new FileReader();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    reader.readAsDataURL(file);
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const { width, height } = image;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, width, height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        canvas.remove();
        observer.next(code);
      };
      image.src = reader.result;
    }
  })
}
