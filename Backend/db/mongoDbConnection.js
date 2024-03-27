import mongoose from 'mongoose';

const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default mongoDbConnection;