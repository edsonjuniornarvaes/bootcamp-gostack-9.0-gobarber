module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: 'integer',
        allow
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
