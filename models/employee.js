'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.User);
  };
  return employee;
};