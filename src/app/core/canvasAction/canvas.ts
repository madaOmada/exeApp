const cv = document.createElement('canvas');
cv.width = 800; cv.height = 600;
export const canvas: HTMLCanvasElement = cv;
export const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

export type ElementType = 'line';
