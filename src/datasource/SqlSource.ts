import * as mysql from 'mysql';

import { _ } from 'underscore'

import { SqlRepository } from "../repository/SqlRepository";

export class SqlSource implements SqlRepository {

sql;

constructor() {

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

isClientAuth(email: string, password: string): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Clients " +
        "WHERE name = '" + email + "' " +
        "AND name = '" + password + "';";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(1);
        } else resolve(-1);
      });
    });
  }

  saveAgency(agency: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Agency" +
        "(name, address, photo, telephone) " +
        "VALUES(" +
        "'" + agency.name + "', " +
        "'" + agency.address + "', " +
        "'" + agency.photo + "', " +
        "'" + agency.telephone + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setAgency(agency: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Agency " +
        "SET " +
        "name = '" + agency.name + "', " +
        "address = '" + agency.address + "', " +
        "photo = '" + agency.photo + "', " +
        "telephone = '" + agency.telephone + "' " +
        "WHERE id = '" + agency.id + "'; " +

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getAgency(agencyId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Agency " +
        ((agencyId) ?
        ("WHERE user_id = " + agencyId)
        : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteAgency(agencyId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "DELETE FROM exf_Agency " +
        "WHERE id = " + agencyId + ";" +

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }
  saveTreep(treep: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Treeps " +
        "(destiny_name, description, photo, price) " +
        "VALUES(" +
        "'" + treep.destiny_name + "', " +
        "'" + treep.description + "', " +
        "'" + treep.photo + "', " +
        "'" + treep.price + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setTreep(treep: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Treeps " +
        "SET " +
        "destiny_name = '" + treep.destiny_name + "', " +
        "description = '" + treep.description + "', " +
        "photo = '" + treep.photo + "', " +
        "price = '" + treep.price + "' " +
        "WHERE id = '" + treep.id + "'; ";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getTreep(treepId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Treeps " +
        ((treepId) ?
          ("WHERE id = " + treepId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteTreep(treepId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "DELETE FROM exf_Treeps " +
        "WHERE id = " + treepId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveClient(client: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Clients " +
        "(name, last_name, last_second_name, photo, contact) " +
        "VALUES(" +
        "'" + client.name + "', " +
        "'" + client.last_name + "', " +
        "'" + client.last_second_name + "', " +
        "'" + client.photo + "', " +
        "'" + client.contact + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setClient(client: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Clients " +
        "SET " +
        "name = '" + client.name + "', " +
        "last_name = '" + client.last_name + "', " +
        "last_second_name = '" + client.last_second_name + "', " +
        "photo = '" + client.photo + "', " +
        "contact = '" + client.contact + "' " +
        "WHERE id = '" + client.id + "'; ";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getClient(clientId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Clients " +
        ((clientId) ?
          ("WHERE id = " + clientId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteClient(clientId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "DELETE FROM exf_Clients " +
        "WHERE id = " + clientId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }








  saveDate(date: any): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO exf_Dates " +
        "(leaving_date, return_date, transportation, duration) " +
        "VALUES(" +
        "'" + date.leaving_date + "', " +
        "'" + date.return_date + "', " +
        "'" + date.transportation + "', " +
        "'" + date.duration + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }
  setDate(date: any): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "UPDATE exf_Dates " +
        "SET " +
        "leaving_date = '" + date.leaving_date + "', " +
        "return_date = '" + date.return_date + "', " +
        "transportation = '" + date.transportation + "', " +
        "duration = '" + date.duration + "' " +
        "WHERE id = '" + date.id + "'; ";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }
  getDate(dateId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM exf_Dates " +
        ((dateId) ?
          ("WHERE id = " + dateId)
          : "");

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve(null);
      });
    });
  }
  deleteDate(dateId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "DELETE FROM exf_Dates " +
        "WHERE id = " + dateId + ";";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }
}

export default new SqlSource();
