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
import cron from 'node-cron'
import https from 'https'

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
cron.schedule('*/1 * * * *', () => {
  console.log('stay awake')
  // https.get(server_url, (res: any) => {
  //   res.on('data', (data: any) => console.log(data))
  //   res.on('end',()=>console.log('Ended'))
  // }).on('error',(error:Error)=>console.log(error))
});
app.listen(PORT, () => {
  console.log(`Server Fired up, on port ${PORT}` );
});