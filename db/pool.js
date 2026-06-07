const {Pool} = require("pg")

module.exports = new Pool({
    host: "localhost",
    user: "madders",
    database: "inventory_app",
    password: 'markxlii',
    port: 5432
})