'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    fromId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    toId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User, { forignKey: 'fromId' })
    Message.belongsTo(models.User, { forignKey: 'toId' })
  };
  return Message;
};