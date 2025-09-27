import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.byxifwf.mongodb.net/TodoApp?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(uri);
    console.log("✅ Connected to DB successfully");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    throw error;
  }
};

export default connectDB;
