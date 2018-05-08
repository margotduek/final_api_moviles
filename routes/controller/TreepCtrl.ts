import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class TreepCtrl
{
    saveTreep(req: Request, res: Response, next: NextFunction)
    {
        let cart = {
            destiny_name: req.body.destiny_name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price
        };

        SqlSource.saveTreep(cart)
            .then((result: number) =>
            {
                let out = { treep_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getTreep(req: Request, res: Response, next: NextFunction)
    {
        let treepId = req.query.treep_id;
        SqlSource.getTreep(treepId)
            .then((result: any) =>
            {
                CtrlUtil.sendObject(res, result);
            });
    }

    setTreep(req: Request, res: Response, next: NextFunction)
    {

        let cart = {
            treep_id: req.body.treep_id,
            destiny_name: req.body.destiny_name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price
        };
        console.log(JSON.stringify(cart))
        SqlSource.setTreep(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });
    }

    deleteTreep(req: Request, res: Response, next: NextFunction)
    {
        let treepId = req.query.treep_id;
        SqlSource.deleteTreep(treepId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}
