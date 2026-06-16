import mongoose from "mongoose";

import config from './config.js'



async function connetDB() {
  await mongoose.connect(config.MONGO_URI)

  console.log("database connectedd");
  
}


export default connetDB