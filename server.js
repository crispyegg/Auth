import app from './src/app.js'

import connetDB from './src/config/database.js';

connetDB();

app.listen(3000,()=>{
  console.log(`server is started`);
  
})