import express from 'express';
import {testController} from './controller';

export  const router = express.Router();

router.get('/', testController);