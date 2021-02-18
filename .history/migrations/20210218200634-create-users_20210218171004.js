module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: 'integer',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
