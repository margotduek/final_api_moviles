import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class AgencyCtrl
{
    saveAgency(req: Request, res: Response, next: NextFunction)
    {
        let cart = {
            name: req.body.name,
            address: req.body.address,
            photo: req.body.photo,
            telephone: req.body.telephone
        };

        SqlSource.saveAgency(cart)
            .then((result: number) =>
            {
                let out = { agency_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getAgency(req: Request, res: Response, next: NextFunction)
    {
        let agencyId = req.query.agency_id;
        SqlSource.getAgency(agencyId)
            .then((result: any) =>
            {
                CtrlUtil.sendObject(res, result);
            });
    }

    setAgency(req: Request, res: Response, next: NextFunction)
    {

        let cart = {
            agency_id: req.body.agency_id,
            name: req.body.name,
            address: req.body.address,
            photo: req.body.photo,
            telephone: req.body.telephone
        };
        SqlSource.setAgency(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });
    }

    deleteAgency(req: Request, res: Response, next: NextFunction)
    {
        let agencyId = req.query.agency_id;
        SqlSource.deleteAgency(agencyId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}
