'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentId: {
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
  Reply.associate = function(models) {
    Reply.belongsTo(models.User, { foreignKey: 'userId' });
    Reply.belongsTo(models.Comment, { foreignKey: 'commentId' });
  };
  return Reply;
};