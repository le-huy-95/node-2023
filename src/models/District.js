'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      District.belongsTo(models.Province, { foreignKey: "ProvinceId" });
      District.hasMany(models.Ward, { foreignKey: "DistrictId" });
      District.hasMany(models.User, { foreignKey: "DistrictId" });
      District.hasMany(models.Customer, { foreignKey: "DistrictId" });

    }
  };
  District.init({
    ProvinceId: DataTypes.INTEGER,
    name: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};