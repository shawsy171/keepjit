import { connectToMongoDB } from './../../database/db';
// const db = require('./../../database/db');

const hello = (msg: string): void => {
  console.log(msg);
}

hello('this is another test');

connectToMongoDB();