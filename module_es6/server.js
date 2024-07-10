import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import customerRouter from './routers/customerRouter.js';

// Load environment variables
dotenv.config();

// Set up server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_CONNECT)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Terminate the process if unable to connect to MongoDB
});

// Routes
app.use('/auth', userRouter);
app.use('/customer', customerRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  });
});
