"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Packs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Products, { foreignKey: "pack_id", as: "pack" });
      this.belongsTo(models.Products, {
        foreignKey: "product_id",
        as: "product"
      });
    }
  }
  Packs.init(
    {
      qty: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Packs"
    }
  );
  return Packs;
};
