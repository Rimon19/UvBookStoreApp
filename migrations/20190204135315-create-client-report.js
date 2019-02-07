'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClientReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      ClientId: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      paidAmount: {
        type: Sequelize.FLOAT
      },
      dueAmount: {
        type: Sequelize.FLOAT
      },
      advanceAmount: {
        type: Sequelize.FLOAT
      },
      packingCoast: {
        type: Sequelize.FLOAT
      },
      commision: {
        type: Sequelize.FLOAT
      },
      currentDue: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
      },
      totalWithComiAndPackingCost: {
        type: Sequelize.FLOAT
      },
      totalWithPreviousDue: {
        type: Sequelize.FLOAT
      },
      finalTotal: {
        type: Sequelize.FLOAT
      },
      billNo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ClientReports');
  }
};