import { Request, Response } from 'express';
import { Message } from '../types/routes.types';

export const getCartDataByEmail = async (req: Request, res: Response) => {
    const message: Message = {
        statusCode: 200,
        message: 'Got data Properly',
        payload: {
            name: 'Cosmo Cosmetics',
            price: 320,
            quantity: 2,
            prodId: 'this is prodID',
            email: 'programerhasan0@gmail.com',
        },
    };

    res.json(message);
};
