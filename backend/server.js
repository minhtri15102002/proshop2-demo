import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routers/productRoutes.js';
import {notFound, errorHandler} from './middlewave/errorMiddlewave.js';
const port = process.env.PORT || 5000;
const app = express();
connectDB();
app.get('/',(req,res) => {
    res.send('API is running');
});

app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,() => console.log(`listening on port ${port}`))