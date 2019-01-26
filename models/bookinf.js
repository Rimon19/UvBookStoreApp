'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookInf = sequelize.define('BookInf', {
   
    name: DataTypes.STRING,
    basePrice: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image: DataTypes.BLOB,
    publisher: DataTypes.STRING,
    publicherYear: DataTypes.STRING,
    author: DataTypes.STRING,
    createdAt:DataTypes.DATE

  }, {});
  BookInf.associate = function(models) {
    // associations can be defined here
  };
  return BookInf;
};