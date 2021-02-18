module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
