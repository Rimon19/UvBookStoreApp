'use strict';
module.exports = (sequelize, DataTypes) => {
  const ClientReport = sequelize.define('ClientReport', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    ClientId: DataTypes.STRING,
    mobile: DataTypes.STRING,
    paidAmount: DataTypes.FLOAT,
    dueAmount: DataTypes.FLOAT,
    advanceAmount: DataTypes.FLOAT,
    packingCoast: DataTypes.FLOAT,
    commision: DataTypes.FLOAT,
    currentDue: DataTypes.FLOAT,
    total: DataTypes.FLOAT,
    totalWithComiAndPackingCost: DataTypes.FLOAT,
    totalWithPreviousDue: DataTypes.FLOAT,
    finalTotal: DataTypes.FLOAT,
    billNo: DataTypes.STRING
  }, {});
  ClientReport.associate = function(models) {
    // associations can be defined here
  };
  return ClientReport;
};