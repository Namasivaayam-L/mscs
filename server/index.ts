import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { PORT } from './config/config'
import authUser from './routes/authUser'
import authMiddleware from './middleware/authMiddleware'
import getSocietyData from './utils/getSocietyData'
import connToDB from './config/db';
const app: Application = express();
 
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('tiny'));
connToDB()
// Protect all routes with the auth middleware
// app.use(authMiddleware);
app.use('/auth/',authUser)
app.use('/get/',getSocietyData)
app.listen(PORT, () => {
  console.log(`Server Fired up, on port ${PORT}` );
});