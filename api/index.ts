import express from 'express';

// db
import { findDocuments, addOneDocument, removeOneDocument, findOneDocument } from './../database/db';

const router = express.Router();

/**
 * get all cards
 */
router.get('/cards', (req: any, res: any) => {
  findDocuments({}, res);
});

/**
 * Add a new card
 */
router.post('/add-card', (req: any, res: any) => {
  console.log("req", req.method, req.body);
  addOneDocument(req.body);
  res.send({name: 'response'});
});

/**
 * Remove a card
 */
router.post('/remove-card', (req: any, res: any) => {
  console.log("req", req.method, req.body);
  removeOneDocument(req.body);
  res.send({name: 'response'});
});

/**
 * edit a card
 */
router.post('/edit-card', (req: any, res: any) => {
  console.log("req", req.method, req.body);

  res.send({name: 'response'});
});

/**
 * find a card
 */
router.post('/find-card', (req: any, res: any) => {
  console.log("req", req.method, req.body);
  findOneDocument(req.body, res);
  // res.send({name: 'response'});
});

export default router;
