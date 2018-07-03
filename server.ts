import express from 'express';
import next from 'next';
import { connectToMongoDB, findDocuments, addOneDocument, updateDocument } from './database/db';

const dev = process.env.NODE_ENV !== 'production'

// const dev = { dev: true } || { dev: false }
const PORT = 6070
// const server = express();
const app = next({ dev })
const handler = app.getRequestHandler(); // <-- what does this do? 

connectToMongoDB();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/', (req, res) => {
      findDocuments({ tourPrice: 800 });
      app.render(req, res, '/index');
      // res.send(' this is working ');
    })
    
    server.get('/add', (req, res) => {
      addOneDocument({ tourName: 'Testing 1 2 3'});
      res.send('document added');
    })
    
    server.get('/update', (req, res) => {
      updateDocument();
      res.send('document updated');
    })

    server.listen(PORT, () => {
      console.info('Listening on Port: ', PORT);
    })
  })


