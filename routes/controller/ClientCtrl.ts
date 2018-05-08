import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { CtrlUtil } from "./CtrlUtil";


export default class ClientCtrl
{

    isClientAuth(req: Request, res: Response, next: NextFunction)
    {
        let email = req.query.email;
        let password = req.query.password;
        SqlSource.isClientAuth(email, password)
            .then((result: number) =>
            {
                CtrlUtil.sendObject(res, {client_id:result});
            });
    }

    saveClient(req: Request, res: Response, next: NextFunction)
    {
        let cart = {
            name: req.body.name,
            last_name: req.body.last_name,
            last_second_name: req.body.last_second_name,
            photo: req.body.photo,
            contact: req.body.contact
        };

        SqlSource.saveClient(cart)
            .then((result: number) =>
            {
                let out = { client_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getClient(req: Request, res: Response, next: NextFunction)
    {
        let clientId = req.query.client_id;
        SqlSource.getClient(clientId)
            .then((result: any) =>
            {
                CtrlUtil.sendObject(res, result);
            });
    }

    setClient(req: Request, res: Response, next: NextFunction)
    {

        let cart = {
            id: req.body.client_id,
            name: req.body.name,
            last_name: req.body.last_name,
            last_second_name: req.body.last_second_name,
            photo: req.body.photo,
            contact: req.body.contact
        };
        console.log(JSON.stringify(cart))
        SqlSource.setClient(cart)
                .then((result: void) =>
                {
                    CtrlUtil.sendOk(res);
                });
    }

    deleteClient(req: Request, res: Response, next: NextFunction)
    {
        let clientId = req.query.client_id;
        SqlSource.deleteClient(clientId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}
