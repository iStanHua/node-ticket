import fs from 'fs';
import https from 'https';

// https://kyfw.12306.cn/otn/leftTicket/queryA?leftTicketDTO.train_date=2020-01-13&leftTicketDTO.from_station=CSQ&leftTicketDTO.to_station=XUG&purpose_codes=ADULT
// https://kyfw.12306.cn/otn/czxx/queryByTrainNo?train_no=6i0000G63408&from_station_telecode=IOQ&to_station_telecode=XBG&depart_date=2019-12-18
export default class Request {
  constructor() {}

  get() {
    return new Promise((resolve, reject) => {
      https
        .get(
          {
            hostname: 'kyfw.12306.cn',
            port: 443,
            path:
              '/otn/leftTicket/queryA?leftTicketDTO.train_date=2020-01-13&leftTicketDTO.from_station=CSQ&leftTicketDTO.to_station=XUG&purpose_codes=ADULT',
            method: 'GET',
            headers: {
              Referer: 'https://kyfw.12306.cn/otn/leftTicket/init',
              'If-Modified-Since': 0,
              Cookie:
                'JSESSIONID=D479D6D949976BEB46B4D754A53A05D7; _jc_save_wfdc_flag=dc; RAIL_EXPIRATION=1576763178328; RAIL_DEVICEID=BR4Oxd61S0WWuRxJFaTx8KBGyt6vdVNBc6jETQjmQLL5eWzFrZyj6-GU4fDOCdGDguTp4OyFKYHQ2XX8MmyLYog2-eeMc3lhDK6i0I1PuLWn-4f63ONWqp67QeJdmZWbP4RMmcewmyWbiwsRu-EjgFjdzCwiIebm; _jc_save_toStation=%u65B0%u4F59%2CXUG; BIGipServerotn=2698445066.64545.0000; BIGipServerpassport=937951498.50215.0000; route=9036359bb8a8a461c164a04f8f50b252; _jc_save_fromStation=%u6DF1%u5733%2CSZQ; _jc_save_toDate=2019-12-17; BIGipServerportal=3084124426.16671.0000; _jc_save_fromDate=2019-12-18'
            }
          },
          res => {
            console.log('状态码:', res.statusCode);
            console.log('请求头:', res.headers);
            let data = '';
            res.on('data', function(buff) {
              data += buff;
            });
            res.on('end', () => {
              resolve(data);
            });
          }
        )
        .on('error', e => {
          reject(e);
        });
    });
  }
}
