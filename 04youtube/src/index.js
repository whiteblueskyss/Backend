import { connectDB } from './db/db.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './env'
});


connectDB();


// ;(async () => {
//   try{
//     await mongoose.connect(`process.env.MONGODB_URI/${DB_NAME}`);
//     app.on('error', (err) => {
//       console.log(`Error in starting the server: ${err}`);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server started at port ${process.env.PORT}`);
//     });
//   }
//   catch(err){
//     console.log(`Error in connecting to the database: ${err}`);
//     throw err;
//   }
// })()