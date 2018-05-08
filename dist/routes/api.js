"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AgencyCtrl_1 = require("./controller/AgencyCtrl");
var ClientCtrl_1 = require("./controller/ClientCtrl");
var DateCtrl_1 = require("./controller/DateCtrl");
var TreepCtrl_1 = require("./controller/TreepCtrl");
var Api = /** @class */ (function () {
    function Api() {
        this.router = express_1.Router();
        this.agencyCtrl = new AgencyCtrl_1.default();
        this.clientCtrl = new ClientCtrl_1.default();
        this.dateCtrl = new DateCtrl_1.default();
        this.treepCtrl = new TreepCtrl_1.default();
        this.init();
    }
    Api.prototype.init = function () {
        this.router.get('/client/auth/', this.clientCtrl.isClientAuth);
        this.router.get('/agency/', this.agencyCtrl.getAgency);
        this.router.post('/agency/', this.agencyCtrl.saveAgency);
        this.router.put('/agency/', this.agencyCtrl.setAgency);
        this.router.delete('/agency/', this.agencyCtrl.deleteAgency);
        this.router.get('/client/', this.clientCtrl.getClient);
        this.router.post('/client/', this.clientCtrl.saveClient);
        this.router.put('/client/', this.clientCtrl.setClient);
        this.router.delete('/client/', this.clientCtrl.deleteClient);
        this.router.get('/date/', this.dateCtrl.getDate);
        this.router.post('/date/', this.dateCtrl.saveDate);
        this.router.put('/date/', this.dateCtrl.setDate);
        this.router.delete('/date/', this.dateCtrl.deleteDate);
        this.router.get('/treep/', this.treepCtrl.getTreep);
        this.router.post('/treep/', this.treepCtrl.saveTreep);
        this.router.put('/treep/', this.treepCtrl.setTreep);
        this.router.delete('/treep/', this.treepCtrl.deleteTreep);
        return this;
    };
    return Api;
}());
exports.Api = Api;
exports.default = new Api().init().router;
//# sourceMappingURL=api.js.map