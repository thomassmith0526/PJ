const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Plane extends Model {}

Plane.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
             references: {
                model: 'user',
                key: 'id',
             },
        },
        rental_id: {
            type: DataTypes.INTEGER,
             references: {
                model: 'rental',
                key: 'id',
             },
        },
        pilot_id: {
            type: DataTypes.INTEGER,
             references: {
                model: 'pilot',
                key: 'id',
             },
        },
        airport_id: {
            type: DataTypes.INTEGER,
             references: {
                model: 'airport',
                key: 'id',
             },
        },
        type_of_plane: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_payload: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        range: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        flight_attendant: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        wifi: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plane'
    }
);

module.exports = Plane