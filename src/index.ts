import fs from 'fs';

import Question from './question';
import Request from './request';
import { TicketParam } from './types';

const question = new Question();
question
  .prompt()
  .then((res: TicketParam) => {
    console.log(res);
    const request = new Request();
    request
      .get(res)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
