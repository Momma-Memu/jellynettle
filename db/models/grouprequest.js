'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupRequest = sequelize.define('GroupRequest', {
    userId: {
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  GroupRequest.associate = function(models) {
    GroupRequest.belongsTo(models.User, { foreignKey: 'userId' });
    GroupRequest.belongsTo(models.Group, { foreignKey: 'groupId' });
  };
  return GroupRequest;
};