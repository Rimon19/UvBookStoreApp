'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  company.associate = function(models) {
    // associations can be defined here
    company.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return company;
};