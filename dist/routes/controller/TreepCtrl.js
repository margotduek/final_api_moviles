"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var TreepCtrl = /** @class */ (function () {
    function TreepCtrl() {
    }
    TreepCtrl.prototype.saveTreep = function (req, res, next) {
        var cart = {
            destiny_name: req.body.destiny_name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price
        };
        SqlSource_1.default.saveTreep(cart)
            .then(function (result) {
            var out = { treep_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    TreepCtrl.prototype.getTreep = function (req, res, next) {
        var treepId = req.query.treep_id;
        SqlSource_1.default.getTreep(treepId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    TreepCtrl.prototype.setTreep = function (req, res, next) {
        var cart = {
            treep_id: req.body.treep_id,
            destiny_name: req.body.destiny_name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price
        };
        console.log(JSON.stringify(cart));
        SqlSource_1.default.setTreep(cart)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    TreepCtrl.prototype.deleteTreep = function (req, res, next) {
        var treepId = req.query.treep_id;
        SqlSource_1.default.deleteTreep(treepId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return TreepCtrl;
}());
exports.default = TreepCtrl;
//# sourceMappingURL=TreepCtrl.js.map