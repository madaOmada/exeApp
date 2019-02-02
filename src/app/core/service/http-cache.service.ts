import { Injectable } from '@angular/core';
import {Cache} from '@core/interface/app.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  cache: Cache;
  constructor() { }
}
