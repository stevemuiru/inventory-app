const {Pool} = require("pg")

module.exports = new Pool({
    host: "localhost",
    user: "madders",
    database: "inventory_app",
    port: 5432
})