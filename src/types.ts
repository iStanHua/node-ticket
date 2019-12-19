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

/**
 * 查询车次参数
 */
export interface TrainParam {
  /**
   * 车次编号
   */
  train_no: string;
  /**
   * 日期
   */
  depart_date: string;
  /**
   * 始发站代码
   */
  from_station_telecode: string;
  /**
   * 终点站代码
   */
  to_station_telecode: string;
}

/**
 * 车次信息
 */
export interface TrainInfo {
  /**
   * 站序
   */
  station_no: string;
  /**
   * 车次号
   */
  station_train_code?: string;
  /**
   * 始发站名称
   */
  start_station_name?: string;
  /**
   * 终点站名称
   */
  end_station_name?: string;
  /**
   * 是否有空调
   */
  service_type?: string;
  /**
   * 出发时间
   */
  start_time: string;
  /**
   * 到站时间
   */
  arrive_time: string;
  /**
   * 停留时间
   */
  stopover_time: string;
  /**
   * 车次类型(高速,动车,快速...)
   */
  train_class_name: string;
  /**
   * 是否启用
   */
  isEnabled: boolean;
}
