'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    username:{
     type: DataTypes.STRING(50),
     allowNull: false,
     unique: true,
    },
    email: {
     type: DataTypes.STRING(100),
     allowNull: false,
     unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.User,
      {as: 'friends', through: 'friend', foreignKey: 'userId', otherKey: 'friendId'})
  };
  return User;
};