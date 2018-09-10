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

router.post('/add-card', (req: any, res: any) => {
  console.log("req", req.method, req.body);
  // addOneDocument()
  res.send({name: 'response'});
});

export default router;
