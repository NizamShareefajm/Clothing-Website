import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes);

const dbURI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Error connection to MongoDB:", err.message);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
