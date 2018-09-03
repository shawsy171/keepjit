import express from 'express';
import next from 'next';
import apiRouter from './api/index';

import { connectToMongoDB, findDocuments, addOneDocument, updateDocument } from './database/db';

const dev = process.env.NODE_ENV !== 'production'

const PORT = 6070
const app = next({ dev })
const handler = app.getRequestHandler(); // <-- what does this do? 

connectToMongoDB();

app.prepare()
  .then(() => {
    const server = express();

    server.use('/api', apiRouter);

    server.get('/', (req, res) => {
      app.render(req, res, '/index');
    })
    
    server.get('/add', (req, res) => {
      addOneDocument({ tourName: 'Testing 1 2 3'});
      res.send('document added');
    })
    
    server.get('/update', (req, res) => {
      updateDocument();
      res.send('document updated');
    })
    
    server.get('*', (req, res) => {
      return handler(req, res);
    })

    server.listen(PORT, () => {
      console.info('Listening on Port: ', PORT);
    })
  })


