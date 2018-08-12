import express from 'express';

// db
import { findDocuments } from './../database/db';

const router = express.Router();

/**
 * get all contests
 */
router.get('/tours', (req: any, res: any) => {
  findDocuments({ tourPrice: 800 }, res);
});

export default router;
