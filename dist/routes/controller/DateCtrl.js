"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var DateCtrl = /** @class */ (function () {
    function DateCtrl() {
    }
    DateCtrl.prototype.saveDate = function (req, res, next) {
        var cart = {
            leaving_date: req.body.leaving_date,
            return_date: req.body.return_date,
            transportation: req.body.transportation,
            duration: req.body.duration
        };
        SqlSource_1.default.saveDate(cart)
            .then(function (result) {
            var out = { date_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    DateCtrl.prototype.getDate = function (req, res, next) {
        var dateId = req.query.date_id;
        SqlSource_1.default.getDate(dateId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    DateCtrl.prototype.setDate = function (req, res, next) {
        var cart = {
            date_id: req.body.date_id,
            leaving_date: req.body.leaving_date,
            return_date: req.body.return_date,
            transportation: req.body.transportation,
            duration: req.body.duration
        };
        SqlSource_1.default.setDate(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    DateCtrl.prototype.deleteDate = function (req, res, next) {
        var dateId = req.query.date_id;
        SqlSource_1.default.deleteDate(dateId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return DateCtrl;
}());
exports.default = DateCtrl;
//# sourceMappingURL=DateCtrl.js.map