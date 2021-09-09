import { Router,Request,Response } from "express";
import express from 'express'

import {consReg, consLogin} from '../controllers/authentication';
import auth from '../middleware/auth'

const router: Router = express.Router();

//user auth
router.post("/api/consumerReg", consReg);
router.post("/api/consumerLogin", consLogin);

router.post("/api/welcome",auth, (req: Request, res: Response) => {
  res.status(200).send("Welcome 🙌 ");
});
export default router;