import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance =  await mongoose.connect(`mongodb+srv://whiteblueskyss:ss123@cluster0.czgwy.mongodb.net/${DB_NAME}`);
    console.log("Connected to the database : " + connectionInstance.connection.host);
  } catch (err) {
    console.log(`Error in connecting to the database: ${err}`);
    process.exit(1);
  }
};

