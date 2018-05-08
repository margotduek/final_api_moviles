"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var SqlSource = /** @class */ (function () {
    function SqlSource() {
        this.sql = mysql.createConnection({
            host: "localhost",
            user: "1021226_user",
            password: "1021226",
            database: "pddm01021226",
            // user: "root",
            // password: "toor",
            // database: "final_moviles",
            multipleStatements: true
        });
    }
    SqlSource.prototype.isClientAuth = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Clients " +
                "WHERE name = '" + email + "' " +
                "AND name = '" + password + "';";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(1);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.saveAgency = function (agency) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Agency" +
                "(name, address, photo, telephone) " +
                "VALUES(" +
                "'" + agency.name + "', " +
                "'" + agency.address + "', " +
                "'" + agency.photo + "', " +
                "'" + agency.telephone + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setAgency = function (agency) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Agency " +
                "SET " +
                "name = '" + agency.name + "', " +
                "address = '" + agency.address + "', " +
                "photo = '" + agency.photo + "', " +
                "telephone = '" + agency.telephone + "' " +
                "WHERE id = '" + agency.id + "'; " +
                _this.sql.query(query, function (err, result, fields) {
                    if (err)
                        return reject(err);
                    resolve();
                });
        });
    };
    SqlSource.prototype.getAgency = function (agencyId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Agency " +
                ((agencyId) ?
                    ("WHERE user_id = " + agencyId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteAgency = function (agencyId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Agency " +
                "WHERE id = " + agencyId + ";" +
                _this.sql.query(query, function (err, result) {
                    if (err)
                        return reject(err);
                    if (result.affectedRows > 0) {
                        resolve();
                    }
                    else
                        resolve();
                });
        });
    };
    SqlSource.prototype.saveTreep = function (treep) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Treeps " +
                "(destiny_name, description, photo, price) " +
                "VALUES(" +
                "'" + treep.destiny_name + "', " +
                "'" + treep.description + "', " +
                "'" + treep.photo + "', " +
                "'" + treep.price + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setTreep = function (treep) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Treeps " +
                "SET " +
                "destiny_name = '" + treep.destiny_name + "', " +
                "description = '" + treep.description + "', " +
                "photo = '" + treep.photo + "', " +
                "price = '" + treep.price + "' " +
                "WHERE id = '" + treep.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getTreep = function (treepId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Treeps " +
                ((treepId) ?
                    ("WHERE id = " + treepId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteTreep = function (treepId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Treeps " +
                "WHERE id = " + treepId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveClient = function (client) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Clients " +
                "(name, last_name, last_second_name, photo, contact) " +
                "VALUES(" +
                "'" + client.name + "', " +
                "'" + client.last_name + "', " +
                "'" + client.last_second_name + "', " +
                "'" + client.photo + "', " +
                "'" + client.contact + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setClient = function (client) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Clients " +
                "SET " +
                "name = '" + client.name + "', " +
                "last_name = '" + client.last_name + "', " +
                "last_second_name = '" + client.last_second_name + "', " +
                "photo = '" + client.photo + "', " +
                "contact = '" + client.contact + "' " +
                "WHERE id = '" + client.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getClient = function (clientId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Clients " +
                ((clientId) ?
                    ("WHERE id = " + clientId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteClient = function (clientId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Clients " +
                "WHERE id = " + clientId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveDate = function (date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO exf_Dates " +
                "(leaving_date, return_date, transportation, duration) " +
                "VALUES(" +
                "'" + date.leaving_date + "', " +
                "'" + date.return_date + "', " +
                "'" + date.transportation + "', " +
                "'" + date.duration + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setDate = function (date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "UPDATE exf_Dates " +
                "SET " +
                "leaving_date = '" + date.leaving_date + "', " +
                "return_date = '" + date.return_date + "', " +
                "transportation = '" + date.transportation + "', " +
                "duration = '" + date.duration + "' " +
                "WHERE id = '" + date.id + "'; ";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getDate = function (dateId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM exf_Dates " +
                ((dateId) ?
                    ("WHERE id = " + dateId)
                    : "");
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteDate = function (dateId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "DELETE FROM exf_Dates " +
                "WHERE id = " + dateId + ";";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    return SqlSource;
}());
exports.SqlSource = SqlSource;
exports.default = new SqlSource();
//# sourceMappingURL=SqlSource.js.map
