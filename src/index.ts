import fs from 'fs';

import Question from './question';
import Request from './request';

const question = new Question();
question
  .prompt()
  .then(res => {
    console.log(res);
    const request = new Request();
    request
      .get()
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
