export interface ImageFile {
  thumbnail: string;
  width: number;
  height: number;
}

export interface WaterFile {
  width: number;
  height: number;
  left: number;
  top: number;
  file: ImageFile;
}


