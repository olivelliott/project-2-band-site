const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Show extends Model {}

Show.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        venue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        show_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'show'
    },
)

// ! TEST
// show_date expects: '2022-01-17'

module.exports = Show;