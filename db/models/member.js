'use strict';
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Member.associate = function(models) {
    Member.belongsTo(models.Group, {foreignKey: 'groupId' });
    Member.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Member;
};