const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Newsletter extends Model {}

Newsletter.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'newsletter'
    }
);


module.exports = Newsletter