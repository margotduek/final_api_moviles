import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class DateCtrl
{
    saveDate(req: Request, res: Response, next: NextFunction)
    {
        let cart = {
            leaving_date: req.body.leaving_date,
            return_date: req.body.return_date,
            transportation: req.body.transportation,
            duration: req.body.duration
        };

        SqlSource.saveDate(cart)
            .then((result: number) =>
            {
                let out = { date_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getDate(req: Request, res: Response, next: NextFunction)
    {
        let dateId = req.query.date_id;
        SqlSource.getDate(dateId)
            .then((result: any) =>
            {
                CtrlUtil.sendObject(res, result);
            });
    }

    setDate(req: Request, res: Response, next: NextFunction)
    {

        let cart = {
            date_id: req.body.date_id,
            leaving_date: req.body.leaving_date,
            return_date: req.body.return_date,
            transportation: req.body.transportation,
            duration: req.body.duration
        };
        SqlSource.setDate(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });
    }

    deleteDate(req: Request, res: Response, next: NextFunction)
    {
        let dateId = req.query.date_id;
        SqlSource.deleteDate(dateId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}
