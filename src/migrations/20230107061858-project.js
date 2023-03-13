'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.STRING
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      money: {
        type: Sequelize.STRING
      },
      shippingUnit_Id: {
        type: Sequelize.INTEGER
      },
      shipping_Cost: {
        type: Sequelize.STRING
      },
      From_address: {
        type: Sequelize.STRING

      },
      To_address: {
        type: Sequelize.STRING

      },
      total: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
      },
      customerId: {
        type: Sequelize.INTEGER
      },
      Note: {
        type: Sequelize.STRING
      },
      salesChannelId: {
        type: Sequelize.INTEGER
      },
      statusdeliveryId: {
        type: Sequelize.INTEGER
      },
      statuspaymentId: {
        type: Sequelize.INTEGER
      },

      statuspickupId: {
        type: Sequelize.INTEGER

      },
      statuswarehouseId: {
        type: Sequelize.INTEGER

      },
      Notemore: {
        type: Sequelize.STRING

      },
      Pricedrop: {
        type: Sequelize.STRING

      },
      Netsalary: {
        type: Sequelize.STRING

      },
      paid: {
        type: Sequelize.STRING

      },
      receiveMoneyId: {
        type: Sequelize.INTEGER

      },
      address_pick_up: {
        type: Sequelize.STRING

      },
      Place_of_receipt: {
        type: Sequelize.STRING

      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};