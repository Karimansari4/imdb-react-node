const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const Movies = sequelize.define('movies', {
    Title: {
        type: Sequelize.DataTypes.STRING
    },
    Poster: {
        type: Sequelize.DataTypes.STRING
    },
    Plot: {
        type: Sequelize.DataTypes.STRING
    },
    Type: {
        type: Sequelize.DataTypes.STRING
    },
    Released: {
        type: Sequelize.DataTypes.STRING
    }
}, {timestamps: true})

module.exports = Movies