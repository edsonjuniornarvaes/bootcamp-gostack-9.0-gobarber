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
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      created_at: {

      },
      
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
