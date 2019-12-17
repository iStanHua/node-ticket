import fs from 'fs';

import { StationInfo } from './types';

export default class Station {
  list: Array<StationInfo>;
  constructor() {
    this.list = JSON.parse(fs.readFileSync('./station.json', 'utf-8'));
  }

  /**
   * 过滤车站
   * @param  name  拼音
   */
  filter(name: string) {
    return this.list.filter(
      l => l.pinyin.indexOf(name) > -1 || l.short.indexOf(name) > -1
    );
  }
}
