'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customer.hasMany(models.Projects, { foreignKey: "customerId" });
            Customer.belongsTo(models.Province, { foreignKey: "ProvinceId" });
            Customer.belongsTo(models.Province, { foreignKey: "ProvinceId" });
            Customer.belongsTo(models.District, { foreignKey: "DistrictId" });
            Customer.belongsTo(models.Ward, { foreignKey: "WardId" });
        }
    };
    Customer.init({
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        addressDetail: DataTypes.STRING,
        note: DataTypes.STRING,
        ProvinceId: DataTypes.INTEGER,
        DistrictId: DataTypes.INTEGER,
        WardId: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Customer',
    });
    return Customer;
};