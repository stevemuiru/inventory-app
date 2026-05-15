const {Client} = require("pg");

const SQL = ``

async function main () {
    const Client = new Client ({
        connectionString : "postgresql://madders@localhost/inventory_app"
    })

    await client.connect()
    await client.query(SQL)
    await client.end()

    console.log("Database populated succesfully")
}

main()
