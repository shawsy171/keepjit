import express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
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
    server.use(bodyParser.urlencoded({
      extended: true
    }));

    server.use(bodyParser.json());

    server.use('/api', apiRouter);

    server.get('/', (req, res) => {
      app.render(req, res, '/index');
    })

    server.get('/add-card', (req, res) => {
      const actualPage = '/addCard';
      app.render(req, res, actualPage);
    })

    server.get('/edit/:id', (req, res) => {
      const actualPage = '/editCard';
      const queryParams = { cardId: req.params.id }
      app.render(req, res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
      return handler(req, res);
    })

    server.listen(PORT, () => {
      console.info('Listening on Port: ', PORT);
    })
  })


