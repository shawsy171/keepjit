import express from 'express';

// db
import { findDocuments, addOneDocument } from './../database/db';

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

export default router;
