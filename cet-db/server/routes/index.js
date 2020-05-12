'use strict';
import express from 'express';
let router = express.Router();
import {checkIn} from './jobs/checkIn';
import {checkOut} from './jobs/checkOut';
import {getClientById} from './jobs/getClientById';
import {searchUnfinished} from './jobs/searchUnfinished'
router.post('/checkIn', checkIn);
router.post('/checkOut/:id', checkOut);
router.get('/client/:id', getClientById);
router.get('/searchUnfinished/:searchTerm', searchUnfinished);
export {router};
