'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookInfs', {
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
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: true,
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
    return queryInterface.dropTable('BookInfs');
  }
};