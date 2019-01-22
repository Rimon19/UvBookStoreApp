'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT,
    UserId:DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
    Article.belongsTo(models.User);
  };
  return Article;
};