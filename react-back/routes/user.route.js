import express from 'express';
const userRoute = express.Router();

import {insertUser,showUser} from '../controllers/user.controller.js';

userRoute
.get("/" ,showUser)
.post("/",insertUser)

export default userRoute;