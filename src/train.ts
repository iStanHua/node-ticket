import fs from 'fs';

export default class Train {
  list: Array<string>;
  constructor(date: string) {
    this.list = JSON.parse(fs.readFileSync(`./${date}.json`, 'utf-8'));
  }

  /**
   * 车次车站
   * @param  name  拼音
   */
  filter(name: string) {
    if (!name) this.list;
    return this.list.filter(
      (l: any) =>
        l.station_train_code.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }
}
