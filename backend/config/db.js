import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is connected", conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDb;
