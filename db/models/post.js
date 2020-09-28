'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER,
    },
    message: {
      type: DataTypes.STRING,
    },
    likeCount: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};