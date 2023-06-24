import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { PORT, server_url } from './config/config'
import authUser from './routes/authUser'
import authMiddleware from './middleware/authMiddleware'
import getSocietyData from './utils/getSocietyData'
import getChartData from './utils/getChartData'
import connToDB from './config/db';


const app: Application = express();
app.get('/', (req: any, res: any) => {
  console.log('Request arrived', server_url)
  res.status(200).send('thanks')
})
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('tiny'));
connToDB()
// Protect all routes with the auth middleware
// app.use(authMiddleware);
app.use('/auth/',authUser)
app.use('/get/', getSocietyData)
app.use('/chart/', getChartData)

app.listen(PORT, () => {
  console.log(`Server Fired up, on port ${PORT}` );
});