'use strict';
import express from 'express';
let router = express.Router();
import {newClient} from './clients/newClient';
import {checkOut} from './clients/checkOut';

router.post('/new/client', newClient);
router.post('/checkout', checkOut);


export {router};
