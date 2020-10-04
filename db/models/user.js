'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    userName:{
     type: DataTypes.STRING(100),
     allowNull: false,
     unique: true,
    },
    email: {
     type: DataTypes.STRING(100),
     allowNull: false,
     unique: true,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
     },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.User,
      {as: 'friends', through: 'friend', foreignKey: 'userId', otherKey: 'friendId'});
    User.hasMany(models.Post, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
    User.hasMany(models.Reply, { foreignKey: 'userId' });
    User.hasMany(models.Group, { foreignKey: 'ownerId' });
    User.hasMany(models.Member, { foreignKey: 'userId' });
    User.hasMany(models.Message, { foreignKey: 'fromId' });
    User.hasMany(models.Message, { foreignKey: 'toId' });
    User.hasMany(models.Request, { foreignKey: 'toUserId' });
    User.hasMany(models.GroupPost, { foreignKey: 'userId'});
    User.hasMany(models.GroupComment, { foreignKey: 'userId' });
    User.hasMany(models.GroupReply, { foreignKey: 'userId' });
    User.hasMany(models.GroupRequest, { foreignKey: 'userId' });
  };
  User.prototype.toSafeObject = function() {
    const {
      id,
      userName
    } = this;

    return { id, userName };
  };

  return User;
};