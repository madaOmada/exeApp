import {Injectable} from '@angular/core';
import {MetaLoader, MetaStaticLoader, PageTitlePositioning} from '@ngx-meta/core';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor() {
  }

  metaFactory(): MetaLoader {
    return new MetaStaticLoader({
      /*routing中data.meta的对应的值*/
      pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
      /*title分隔符*/
      pageTitleSeparator: '-',
      /*title后缀*/
      applicationName: 'DIY_APP',
      /*默认的tdk*/
      defaults: {
        title: 'WOW',
        description: 'WOW',
        keywords: 'WOW'
      }
    });
  }
}
