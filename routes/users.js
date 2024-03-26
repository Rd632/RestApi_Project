import express from 'express';


import {createUser, getUser , getidUser , deleteUser , patchUser} from '../controllers/users.js';


const router = express.Router();


router.get('/',getUser);

router.post('/',createUser);

router.get('/:id',getidUser);

router.delete('/:id',deleteUser);

router.patch('/:id',patchUser);
 

export default router;