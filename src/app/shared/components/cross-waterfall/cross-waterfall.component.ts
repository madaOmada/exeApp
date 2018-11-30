import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WaterFile} from '@core/interface/file.interface';


@Component({
  selector: 'app-cross-waterfall',
  templateUrl: './cross-waterfall.component.html',
  styleUrls: ['./cross-waterfall.component.scss']
})
export class CrossWaterfallComponent implements OnInit {
  containerWidth: number;
  list: WaterFile[];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/assets/mock_data/water.json').subscribe(res => {
      console.log(res);
    });
  }

}
