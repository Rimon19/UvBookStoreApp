'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookReport = sequelize.define('bookReport', {
    name: DataTypes.STRING,
    basePrice: DataTypes.FLOAT,
    categoryId: DataTypes.STRING,
    image: DataTypes.BLOB,
    publisher: DataTypes.STRING,
    publicherYear: DataTypes.STRING,
    author: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    subTotal: DataTypes.FLOAT,
    billNo: DataTypes.STRING,
    
  }, {});
  bookReport.associate = function(models) {
    // associations can be defined here
  };
  return bookReport;
};