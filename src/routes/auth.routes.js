

import { Router } from "express";

const authRouter = Router();

import * as authcontroller from '../controllers/auth.controller.js'

authRouter.post("/register" , authcontroller.register)




export default authRouter;