'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Group.associate = function(models) {
    Group.belongsTo(models.User, { foreignKey: 'ownerId' });
    Group.hasMany(models.Member, {foreignKey: 'groupId'})
    Group.hasMany(models.GroupPost, {foreignKey: 'groupId'});
    Group.hasMany(models.GroupRequest, { foreignKey: 'groupId' });
  };
  return Group;
};