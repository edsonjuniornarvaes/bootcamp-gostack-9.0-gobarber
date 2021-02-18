module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: 'integer',
        allowNull: false,
        autoincrement: true,
        primaryKey: true,
      },
      name: {
        
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
