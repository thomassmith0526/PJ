const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Airport extends Model {}

Airport.init(
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
                model: 'plane',
                key: 'id',
             },
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        landThere: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'airport',
    }
);

module.exports = Airport