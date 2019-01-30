'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('Client', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    ClientId: DataTypes.STRING,
    mobile: DataTypes.STRING,
    paidAmount: DataTypes.INTEGER,
    dueAmount: DataTypes.INTEGER,
    advanceAmount: DataTypes.INTEGER
  }, {});
  client.associate = function(models) {
    // associations can be defined here
  };
  return client;
};