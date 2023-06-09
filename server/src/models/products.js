"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Packs, { foreignKey: "pack_id", as: "pack" });
      this.hasMany(models.Packs, { foreignKey: "product_id", as: "product" });
    }
  }
  Products.init(
    {
      code: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      cost_price: {
        allowNull: false,
        type: DataTypes.DECIMAL
      },
      sales_price: {
        allowNull: false,
        type: DataTypes.DECIMAL
      }
    },
    {
      sequelize,
      modelName: "Products"
    }
  );
  return Products;
};
