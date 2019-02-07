'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bookReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      basePrice: {
        type: Sequelize.FLOAT
      },
      categoryId: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      publisher: {
        type: Sequelize.STRING
      },
      publicherYear: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.FLOAT
      },
      subTotal: {
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
    return queryInterface.dropTable('bookReports');
  }
};