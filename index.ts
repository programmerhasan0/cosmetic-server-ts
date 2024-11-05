//imports
import express, { Express } from 'express';
import dotenv from 'dotenv';

// routes
import cartRouter from './src/routes/cart.route';

dotenv.config();
const app: Express = express();

app.use('/cart', cartRouter);

const port: number | string = process.env.PORT || 3000;

app.listen(port, (): void => {
    console.log(`listening on port ${port}`);
});
