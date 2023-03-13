'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Group, { foreignKey: "groupId" });
      User.belongsToMany(models.Projects, { through: "Project_Users" /* options */, foreignKey: "userId" });
      User.belongsTo(models.Province, { foreignKey: "ProvinceId" });
      User.belongsTo(models.District, { foreignKey: "DistrictId" });
      User.belongsTo(models.Ward, { foreignKey: "WardId" });

    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    addressDetail: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING,
    groupId: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    ProvinceId: DataTypes.INTEGER,
    DistrictId: DataTypes.INTEGER,
    WardId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};