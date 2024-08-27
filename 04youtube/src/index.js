import { connectDB } from './db/db.js';
import dotenv from 'dotenv';
import {app} from './app.js';

dotenv.config({
  path: './env'
});


connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error(`Express server error: ${error}`);
    });
    app.listen(process.env.PORT||8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`MongoDB connection error: ${error}`);
  });


  app.get('/', (req, res) => {
    res.send('Hello World');
  });

