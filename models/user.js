"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    address: {
      type: DataTypes.STRING
    }
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
