const {Client} = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    category_id INTEGER REFERENCES categories(id)
);

INSERT INTO categories (name) VALUES
('Laptops'),
('Printers'),
('CCTV Cameras');

INSERT INTO items (name, description, price, quantity, category_id) VALUES
('Dell XPS 15', '15-inch laptop, Intel i7, 16GB RAM, 512GB SSD', 1299.99, 10, 1),
('MacBook Air M2', '13-inch, Apple M2 chip, 8GB RAM, 256GB SSD', 1099.99, 7, 1),
('HP LaserJet Pro', 'Monochrome laser printer, 30ppm, wireless', 349.99, 5, 2),
('Canon PIXMA', 'Color inkjet printer, wireless, duplex printing', 199.99, 8, 2),
('Hikvision DS-2CD', '4MP outdoor IP camera, night vision, weatherproof', 89.99, 20, 3),
('Dahua IPC-HDW', '2MP dome camera, IR 30m, H.265+ compression', 74.99, 15, 3);
`;

async function main () {
    const client = new Client ({
        connectionString : "postgresql://madders@localhost/inventory_app"
    })

    await client.connect()
    await client.query(SQL)
    await client.end()

    console.log("Database populated succesfully")
}

main()
