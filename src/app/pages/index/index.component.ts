import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import Handsontable from 'handsontable';
import {RouterReducerState} from '@ngrx/router-store';
import {UserService} from '@core/service/user.service';
import {HotTableRegisterer} from '@handsontable/angular';
import {DOCUMENT} from '@angular/common';
import {TemplateItemComponent} from '../../shared/components/template-item/template-item.component';
import {ImageDataService} from '@core/service/image-data.service';
import {ModalService} from '../../shared/modal/modal.service';
import QRCode from 'qrcode'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [HotTableRegisterer]
})
export class IndexComponent implements OnInit, AfterViewInit {
  cell = TemplateItemComponent;
  image = '//image.tubangzhu.net/updata/201908/13/7a6add494b7a16ce00c8.png';
  setting = {
    data: [
      {id: 1, name: 'Ted Right', address: 'Wall Street'},
      {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
      {id: 3, name: 'Joan Well', address: 'Broadway'},
      {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
      {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
      {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
      {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
      {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
    ],
    contextMenu: true,
    rowHeaders: true,
    colHeaders: true,
    afterInit: () => {
      this.table = this.hot.getInstance('haha');
    }
  };

  testData = [
    'http://www.baidu.com'/*,
    'https://m.duoduoyin.com',
    'https://www.tubangzhu.com'*/
  ];

  list;

  scrollHeight = 1000;

  table: Handsontable;
  count = 0;

  text = '';

  constructor(
    private store: Store<RouterReducerState>,
    private userS: UserService,
    public modal: ModalService,
    private hot: HotTableRegisterer,
    private data: ImageDataService,
    @Inject(DOCUMENT) private document
  ) {
  }

  ngOnInit() {
    new MutationObserver(() => {})
    /*this.data.getData().subscribe(data => {
      this.list = data;
    })*/
    // this.handler()
    // this.batchGenerate();
    const text = "我们会吵架会闹脾气，但是我们不会分开‍️‍，你总会依着我一些小脾气、坏习惯，在我心里你是例外是无可替代你就是最好的。"
    // console.log(text.match(/[\u200b-\u200f\uFEFF\u202a-\u202e]/))
    for (let i = 0; i<text.length; i++) {
      // if (char.match(/[\u200b-\u200f\uFEFF\u202a-\u202e]/)) continue;
      console.log(text.charAt(i),text.charAt(i).charCodeAt(0))
    }
  }

  getCode(event) {
    const code = parseInt(event.target.value);
    this.text = String.fromCharCode(code);
    console.log(this.text)
  }

  async batchGenerate() {
    for (let qrStr of this.testData) {
      const base64 = await QRCode.toDataURL(qrStr, {});
      const blobStr = atob(base64.split(',')[1]);
      let n = blobStr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = blobStr.charCodeAt(n);
      }
      const blob = new Blob([u8arr], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      window.open(url)
      // window.location.href = url;
    }
  }

  handler() {
    console.log(this.count ++);
    setTimeout(this.handler.bind(this), 200)
  }

  fileChange(event) {
    console.log(event);
  }

  test() {
    this.userS.login().subscribe(data => {
      console.log('clickLogin', data);
    });
  }

  touch() {
    this.modal.create({
      title: '标题',
      content: '内容',
      mask: false
    })
    // this.data.getData().subscribe()
  }

  onScrollDown() {
    this.scrollHeight += 100;
  }

  onScrollUp() {
    console.log('scrolled up!!');
  }

  ngAfterViewInit() {
    /*
    美工机器人模版批量
    请求方法：post
    请求路径：/api/robot-get-template-image
    请求参数：{
      tpl_json：模板数据，
      signData： 标签数据，
      json：是否只返回json
    }
    返回结果：{
      code: 0 成功 / -1 失败，
      msg: 错误信息,
      image: 生成的非拆分图片 (base64),
      images: 生成的拆分图片 (base64[])
      json: 模版数据
    }

    美工机器人详情下载
    请求方法：post
    请求路径：/api/get-detail-template-image
    请求参数：{
      tpl_json：模板数据，
      merged_pages： 是否拆分 0:不拆分 1:拆分 2:都有
    }
    返回结果：{
      code: 0 成功 / -1 失败，
      msg: 错误信息,
      pageImgs: 生成的拆分图片 (base64[]),
      imgFull: 生成的非拆分图片 (base64)
    }
    */
  }
}
