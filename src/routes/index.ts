import express from 'express';
import {router as vegetables} from '../apiServices/vegetables/routes';

export const router = express.Router();

router.use('/vegetables', vegetables);


