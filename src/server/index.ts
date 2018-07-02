import { connectToMongoDB, findDocuments, addOneDocument, updateDocument } from './../../database/db';
import express from 'express';

const HOST = '';
const PORT = 6070
const app = express();

connectToMongoDB();

app.get('/', (req, res) => {
  findDocuments({ tourPrice: 800 });
  res.send(' this is working ');
})

app.get('/add', (req, res) => {
  addOneDocument({ tourName: 'Testing 1 2 3'});
  res.send('document added');
})

app.get('/update', (req, res) => {
  updateDocument();
  res.send('document updated');
})

app.listen(PORT, () => {
  console.info('Listening on Port: ', PORT);
})