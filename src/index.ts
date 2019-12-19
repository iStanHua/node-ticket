import fs from 'fs';

import Question from './question';
import Request from './request';
import { TicketParam, TrainParam } from './types';

const question = new Question();
question
  .station()
  .then((res: TicketParam) => {
    const request = new Request();
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
