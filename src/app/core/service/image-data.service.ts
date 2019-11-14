import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('/assets/mock_data/water.json')
  }
}
