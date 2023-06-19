import { Request, Response } from "express"
import Data from "../models/dataModel"

const router = require('express')()

router.get('/stateWise', async (req: Request, res: Response) => {
    try {
        let count = await Data.aggregate([
            {
                $group: {
                    _id: "$state",
                    total: { $sum: 1 },
                }
            }
        ])
        // console.log(count);
        return res.status(200).send(count)
    } catch (error) {
        console.log('getChartData.ts ', error);
        return res.status(401).send(null)
    }
})

router.get('/typeWise', async (req: Request, res: Response) => {
    try {
        let count = await Data.aggregate([
            {
                $group: {
                    _id: "$sector_type",
                    total: { $sum: 1 },
                }
            }
        ])
        // console.log(count);
        return res.status(200).send(count)
    } catch (error) {
        console.log('getChartData.ts ', error);
        return res.status(401).send(null)
    }
})

router.get('/yearWise', async (req: Request, res: Response) => {
    try {
        let count = await Data.aggregate([
            {
                $project: {
                    date: {
                        $toDate: {
                            $dateFromString: {
                                dateString: "$date_of_registration",
                                format: "%d/%m/%Y",
                                onError: new Date(0)
                            }
                        }
                    },
                }
            },
            {
                $group: {
                    _id: {$year:"$date"},
                    total: {
                        $sum: 1
                    }
                }
            }
        ])
        // console.log(count);
        return res.status(200).send(count)
    } catch (error) {
        console.log('getChartData.ts ', error);
        return res.status(401).send(error)
    }
})



export default router