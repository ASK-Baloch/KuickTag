import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectdb = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('Mongo DB connection error:', error);
  }
};

// Call the connection function
connectdb();
export {connectdb}
