'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: {
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
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, { foreignKey: 'postId' });
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.hasMany(models.Reply, { foreignKey: 'commentId'});
  };
  return Comment;
};