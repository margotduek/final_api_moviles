"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var ClientCtrl = /** @class */ (function () {
    function ClientCtrl() {
    }
    ClientCtrl.prototype.isClientAuth = function (req, res, next) {
        var email = req.query.email;
        var password = req.query.password;
        SqlSource_1.default.isClientAuth(email, password)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, { client_id: result });
        });
    };
    ClientCtrl.prototype.saveClient = function (req, res, next) {
        var cart = {
            name: req.body.name,
            last_name: req.body.last_name,
            last_second_name: req.body.last_second_name,
            photo: req.body.photo,
            contact: req.body.contact
        };
        SqlSource_1.default.saveClient(cart)
            .then(function (result) {
            var out = { client_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    ClientCtrl.prototype.getClient = function (req, res, next) {
        var clientId = req.query.client_id;
        SqlSource_1.default.getClient(clientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    ClientCtrl.prototype.setClient = function (req, res, next) {
        var cart = {
            id: req.body.client_id,
            name: req.body.name,
            last_name: req.body.last_name,
            last_second_name: req.body.last_second_name,
            photo: req.body.photo,
            contact: req.body.contact
        };
        console.log(JSON.stringify(cart));
        SqlSource_1.default.setClient(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    ClientCtrl.prototype.deleteClient = function (req, res, next) {
        var clientId = req.query.client_id;
        SqlSource_1.default.deleteClient(clientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return ClientCtrl;
}());
exports.default = ClientCtrl;
//# sourceMappingURL=ClientCtrl.js.map