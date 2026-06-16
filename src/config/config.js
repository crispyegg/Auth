
import dotenv from 'dotenv'

dotenv.config();

if(!process.env.MONGO_URI){
  throw new Error("mongouri is not available in enviromental variables ")
}
if(!process.env.JWT_SECRET){
  throw new Error("jwt secret  is not available in enviromental variables ")
}

const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET
}

export default config