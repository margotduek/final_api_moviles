
import { NextFunction, Request, Response, Router } from "express";
import AgencyCtrl from "./controller/AgencyCtrl";
import ClientCtrl from "./controller/ClientCtrl";
import DateCtrl from "./controller/DateCtrl";
import TreepCtrl from "./controller/TreepCtrl";


export class Api
{

  router: Router
  agencyCtrl: AgencyCtrl;
  clientCtrl: ClientCtrl;
  dateCtrl: DateCtrl;
  treepCtrl: TreepCtrl;

  constructor()
  {
    this.router = Router();
    this.agencyCtrl = new AgencyCtrl();
    this.clientCtrl = new ClientCtrl();
    this.dateCtrl = new DateCtrl();
    this.treepCtrl = new TreepCtrl();

    this.init();
  }

  public init() : Api
  {

    this.router.get('/client/auth/', this.clientCtrl.isClientAuth);

    this.router.get('/agency/', this.agencyCtrl.getAgency);
    this.router.post('/agency/', this.agencyCtrl.saveAgency);
    this.router.put('/agency/', this.agencyCtrl.setAgency);
    this.router.delete('/agency/', this.agencyCtrl.deleteAgency);

    this.router.get('/client/', this.clientCtrl.getClient);
    this.router.post('/client/', this.clientCtrl.saveClient);
    this.router.put('/client/', this.clientCtrl.setClient);
    this.router.delete('/client/',this.clientCtrl.deleteClient);

    this.router.get('/date/', this.dateCtrl.getDate);
    this.router.post('/date/', this.dateCtrl.saveDate);
    this.router.put('/date/', this.dateCtrl.setDate);
    this.router.delete('/date/',this.dateCtrl.deleteDate);


    this.router.get('/treep/', this.treepCtrl.getTreep);
    this.router.post('/treep/', this.treepCtrl.saveTreep);
    this.router.put('/treep/', this.treepCtrl.setTreep);
    this.router.delete('/treep/',this.treepCtrl.deleteTreep);

    return this;
  }
}

export default new Api().init().router;
