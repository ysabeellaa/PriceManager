"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Packs",
      [
        {
          pack_id: 1000,
          product_id: 18,
          qty: 6,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          pack_id: 1010,
          product_id: 24,
          qty: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          pack_id: 1010,
          product_id: 26,
          qty: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          pack_id: 1020,
          product_id: 19,
          qty: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          pack_id: 1020,
          product_id: 21,
          qty: 3,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Packs", null, {});
  }
};
