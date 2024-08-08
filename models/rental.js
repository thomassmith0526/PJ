const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rental extends Model {}

Rental.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        plane_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
     
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'rental'
    }
);

module.exports = Rental 