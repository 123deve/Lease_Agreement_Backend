import express from 'express';
import { createRentLease } from '../controllers/rentController.js';
const router = express.Router();

router.post('/generate', createRentLease);

export default router;
