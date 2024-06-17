import mongoose from "mongoose";

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DB, MONGO_OPTIONS } =
  process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?${MONGO_OPTIONS}`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
