"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var AgencyCtrl = /** @class */ (function () {
    function AgencyCtrl() {
    }
    AgencyCtrl.prototype.saveAgency = function (req, res, next) {
        var cart = {
            name: req.body.name,
            address: req.body.address,
            photo: req.body.photo,
            telephone: req.body.telephone
        };
        SqlSource_1.default.saveAgency(cart)
            .then(function (result) {
            var out = { agency_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    AgencyCtrl.prototype.getAgency = function (req, res, next) {
        var agencyId = req.query.agency_id;
        SqlSource_1.default.getAgency(agencyId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    AgencyCtrl.prototype.setAgency = function (req, res, next) {
        var cart = {
            agency_id: req.body.agency_id,
            name: req.body.name,
            address: req.body.address,
            photo: req.body.photo,
            telephone: req.body.telephone
        };
        SqlSource_1.default.setAgency(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    AgencyCtrl.prototype.deleteAgency = function (req, res, next) {
        var agencyId = req.query.agency_id;
        SqlSource_1.default.deleteAgency(agencyId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return AgencyCtrl;
}());
exports.default = AgencyCtrl;
//# sourceMappingURL=AgencyCtrl.js.map