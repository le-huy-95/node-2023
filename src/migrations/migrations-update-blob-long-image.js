module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Image', 'url', {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            },)
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('Image', 'url', {
                type: Sequelize.STRING,
                allowNull: true,
            },)
        ])
    }
};