const router = require('express')()
import { Request, Response } from 'express'
import Data from '../models/dataModel'

router.get('/getSocietyData', async (req: Request, res: Response) => {
    try {
        const data = await Data.find({})
        // console.log(data)
        return res.status(200).send(data)
    } catch (error) {
        console.log('getSocietyData.ts get',error);
    }
})

export default router