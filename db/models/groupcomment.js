'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupComment = sequelize.define('GroupComment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupPostId: {
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
  GroupComment.associate = function(models) {
    GroupComment.belongsTo(models.GroupPost, { foreignKey: 'groupPostId'})
    GroupComment.belongsTo(models.User, { foreignKey: 'userId'} )
  };
  return GroupComment;
};