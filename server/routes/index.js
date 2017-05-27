'use strict';
import express from 'express';
let router = express.Router();
import {newClient} from './clients/newClient'

router.post('/new/client', newClient);


export {router};
