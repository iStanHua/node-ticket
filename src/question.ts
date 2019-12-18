import inquirer from 'inquirer';

import Station from './station';

export default class Question {
  createPrompt: inquirer.PromptModule;
  constructor() {
    this.createPrompt = inquirer.createPromptModule();
  }
  prompt() {
    const station = new Station();

    const startStations: any = { list: [], origin: {} };
    const endStations: any = { list: [], origin: {} };

    return new Promise((resolve, reject) => {
      this.createPrompt([
        {
          type: 'input',
          name: 'train_date',
          message: '输入日期(如:2020-01-01)：',
          validate(input: any) {
            if (!input) return true;
            if (input.match(/[\d]{4}-[\d]{1,2}-[\d]{1,2}/gi)) {
              return true;
            } else {
              return '输入的日期非法，重新输入';
            }
          },
          default() {
            return '2020-01-01';
          }
        },
        {
          type: 'input',
          name: 'from_station_',
          message: '输入始发站拼音(如:shanghai)：',
          validate(input: any) {
            if (!input) input = 'shanghai';
            if (station.filter(input).length) {
              const temp = station.filter(input);
              if (Object.prototype.toString.call(temp) === '[object Array]') {
                temp.forEach((t, i) => {
                  startStations.list.push(t.name);
                  startStations.origin[t.name] = t;
                });
              }
              return true;
            } else {
              return '没有这个车站哦，请重新输入始发站';
            }
          }
        },
        {
          type: 'list',
          name: 'from_station',
          message: '请选择始发站？',
          choices: startStations.list,
          default: 0
        },
        {
          type: 'input',
          name: 'to_station_',
          message: '输入终点站拼音(如:shenzhen)：',
          validate(input: any) {
            if (!input) input = 'shenzhen';
            if (station.filter(input).length) {
              const temp = station.filter(input);
              if (Object.prototype.toString.call(temp) === '[object Array]') {
                temp.forEach(t => {
                  endStations.list.push(t.name);
                  endStations.origin[t.name] = t;
                });
              }
              return true;
            } else {
              return '没有这个车站哦，请重新输入终点站';
            }
          }
        },
        {
          type: 'list',
          name: 'to_station',
          message: '请选择终点站？',
          choices: endStations.list,
          default: 0
        },
        // {
        //   type: 'input',
        //   name: 'train_num',
        //   message: '输入车次(如:K1209，多个车次用|分开)：',
        //   validate() {
        //     return true;
        //   }
        // },
        {
          type: 'confirm',
          name: 'purpose_codes',
          message: '是否购买学生票?(y/n)：',
          validate() {
            return true;
          },
          default() {
            return false;
          }
        }
      ])
        .then((answer: any) => {
          resolve({
            train_date: answer.train_date,
            from_station: startStations.origin[answer.from_station].code,
            to_station: endStations.origin[answer.to_station].code,
            purpose_codes: answer.purpose_codes ? '0X00' : 'ADULT'
          });
        })
        .catch(err => {
          reject(err);
          console.log(err);
        });
    });
  }
}
