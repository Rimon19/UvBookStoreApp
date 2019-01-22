'use strict';

module.exports= (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // associations can be defined here
   
    User.hasMany(models.company, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
   
  };
 
//   Task.associate = function (models) { cascade
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Task;
// };
  return User;
};
