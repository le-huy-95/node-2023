'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Projects.belongsTo(models.Status_Received_money, { foreignKey: "receiveMoneyId" });

      Projects.belongsTo(models.Status_Delivery, { foreignKey: "statusDeliveryId" });
      Projects.belongsTo(models.Status_Payment, { foreignKey: "statusPaymentId" });
      Projects.belongsToMany(models.User, { through: "Project_Users" /* options */, foreignKey: "projectOrder" });
      Projects.belongsTo(models.Shipping_Unit, { foreignKey: "shippingUnit_Id" });
      Projects.belongsTo(models.Customer, { foreignKey: "customerId" });
      Projects.belongsTo(models.Sales_Channel, { foreignKey: "salesChannelId" });
      Projects.belongsToMany(models.Image, { through: "Projects_Image" /* options */, foreignKey: "projectId" });

      Projects.belongsTo(models.Status_Pickup, { foreignKey: "statuspickupId" });
      Projects.belongsTo(models.Status_Warehouse, { foreignKey: "statuswarehouseId" });
      Projects.hasMany(models.Chat, { foreignKey: "projectId" });

    }
  };
  Projects.init({
    order: DataTypes.STRING,
    nameProduct: DataTypes.STRING,
    quantity: DataTypes.STRING,
    money: DataTypes.STRING,
    shippingUnit_Id: DataTypes.INTEGER,
    shipping_Cost: DataTypes.STRING,
    From_address: DataTypes.STRING,
    To_address: DataTypes.STRING,
    total: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    customerId: DataTypes.INTEGER,
    Note: DataTypes.STRING,
    salesChannelId: DataTypes.INTEGER,
    statusDeliveryId: DataTypes.INTEGER,
    statusPaymentId: DataTypes.INTEGER,
    statuspickupId: DataTypes.INTEGER,
    statuswarehouseId: DataTypes.INTEGER,
    Notemore: DataTypes.STRING,
    Pricedrop: DataTypes.STRING,
    Netsalary: DataTypes.STRING,
    paid: DataTypes.STRING,
    receiveMoneyId: DataTypes.INTEGER,
    address_pick_up: DataTypes.STRING,
    Place_of_receipt: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};