'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookInf = sequelize.define('BookInf', {
   
    name: DataTypes.STRING,
    basePrice: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    publisher: DataTypes.STRING,
    publicherYear: DataTypes.STRING,
    author: DataTypes.STRING,
    createdAt:DataTypes.DATE

  }, {});
  BookInf.associate = function(models) {
    // associations can be defined here
    BookInf.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    })
  };
  return BookInf;
};