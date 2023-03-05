'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Shipping_Cost extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Shipping_Cost.hasOne(models.Shipping_Unit, { foreignKey: "shippingUnitId" });
        }
    };
    Shipping_Cost.init({
        ShippingUnitId: DataTypes.INTEGER,
        From: DataTypes.STRING,
        To: DataTypes.STRING,
        Cost: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Shipping_Cost',
    });
    return Shipping_Cost;
};