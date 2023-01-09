import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // connect to DB, takes the URL and an object of options
    // const connection = await mongoose.connect(process.env.MONGO_URI, {
    const connection = await mongoose.connect(
      "mongodb+srv://pranjul120568:pranjul120568@cluster0.mkc2yw7.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    //log the connection host
    console.log(
      `MongoDB connected: ${connection.connection.host}`.underline.cyan
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    //the 1 means it will exit with failure
    process.exit(1);
  }
};

export default connectDB;
