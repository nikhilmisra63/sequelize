'use strict';
module.exports = (sequelize, DataTypes) => {
  const root = sequelize.define('root', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  root.associate = function(models) {
    // associations can be defined here
  };
  return root;
};