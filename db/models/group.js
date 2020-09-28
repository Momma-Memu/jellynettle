'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING(100),
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
  };
  return Group;
};