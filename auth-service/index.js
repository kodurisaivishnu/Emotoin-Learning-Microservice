import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
connectDB();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user',userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
