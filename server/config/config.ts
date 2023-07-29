require('dotenv').config()
export const PORT: Number = 5000
export const secret: string = 'test'
// export const mongoURI: string = 'mongodb://127.0.0.1:27017/mscs'
export const mongoURI: any = process.env.MONGODB_URI
export const server_url:any = process.env.NODEJS_SERVER

