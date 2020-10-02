'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupReply = sequelize.define('GroupReply', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupCommentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  GroupReply.associate = function(models) {
    GroupReply.belongsTo(models.User, { foreignKey: 'userId' })
    GroupReply.belongsTo(models.GroupComment, { foreignKey: 'groupCommentId' })
  };
  return GroupReply;
};