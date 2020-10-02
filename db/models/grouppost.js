'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupPost = sequelize.define('GroupPost', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
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
  GroupPost.associate = function(models) {
    GroupPost.belongsTo(models.Group, { foreignKey: 'groupId'})
    GroupPost.belongsTo(models.User, { foreignKey: 'userId' })
    GroupPost.hasMany(models.GroupComment, {foreignKey: 'groupPostId' });
  };
  return GroupPost;
};