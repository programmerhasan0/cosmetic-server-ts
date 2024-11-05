import { Router, Request, Response } from 'express';
import { getCartDataByEmail } from '../controllers/cart.controller';
const cartRouter = Router();

cartRouter.get('/single', getCartDataByEmail);

export default cartRouter;
