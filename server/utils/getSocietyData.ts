const router = require('express')()
import { Request, Response } from 'express'
import Data from '../models/dataModel'

interface row {
	_id: string;
	name_of_society: string;
	address: string;
	state: string;
	district: string;
	date_of_registration: string;
	area_of_operation: string;
	sector_type: string;
}


router.get('/getSocietyData', async (req: Request, res: Response) => {
    try {
        const data:row[] = await Data.find({})
        // console.log(data)
        const uniqueObjects:row[] = data.reduce((org:row[], ele:row) => {
            if (!org.includes(ele)) {
              org.push(ele);
            }
            return org;
        }, []);
        return res.status(200).send(uniqueObjects)
    } catch (error) {
        console.log('getSocietyData.ts get',error);
    }
})

export default router