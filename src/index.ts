import fs from 'fs';

import Question from './question';
import Request from './request';
import { TicketParam, TrainParam } from './types';

const request = new Request();
const question = new Question();

request
  .post({ train_station_code: 'XUG' })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

question
  .station()
  .then((res: TicketParam) => {
    request
      .queryTicket(res)
      .then(data => {
        fs.writeFileSync(`./${res.train_date}.json`, JSON.stringify(data));
        question
          .train(res.train_date)
          .then((t: TrainParam) => {
            request
              .queryByTrainNo(t)
              .then(l => {
                console.log(l);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
