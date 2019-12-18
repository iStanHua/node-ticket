/**
 * 车站
 */
export interface StationInfo {
  /**
   * 名称
   */
  name: string;
  /**
   * 拼音
   */
  pinyin: string;
  /**
   * 拼音简称
   */
  short: string;
  /**
   * 代码
   */
  code: string;
}

/**
 * 查询余票参数
 */
export interface TicketParam {
  /**
   * 日期
   */
  train_date: string;
  /**
   * 始发站拼音
   */
  from_station: string;
  /**
   * 终点站拼音
   */
  to_station: string;
  /**
   * 是否购买学生票
   */
  purpose_codes: string;
}
