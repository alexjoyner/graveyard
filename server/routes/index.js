'use strict';
import express from 'express';
let router = express.Router();

import {handlePostNewPreOrder} from './preorders/post_new_preorder';

router.post('/new/preorder', handlePostNewPreOrder);


export {router};
