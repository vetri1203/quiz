
import { Sample } from './Component/Sample.js';
import express from 'express';

export const Routes = express.Router()

Routes.post('/', Sample);
Routes.get('/', Sample);
