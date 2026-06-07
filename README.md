# Inventory App

A web-based inventory management system for tracking laptops, printers, and CCTV cameras. Built with Node.js, Express, PostgreSQL, and EJS.

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Templating:** EJS
- **Styling:** CSS

## Features

- View all inventory items grouped by category
- Browse items by category (Laptops, Printers, CCTV Cameras)
- Add new items to a category
- Delete items from inventory

## Project Structure

```
inventory-app/
├── controllers/
│   └── itemsController.js   # Handles all request logic and DB queries
├── db/
│   ├── pool.js              # PostgreSQL connection pool
│   └── populatedb.js        # Script to set up and seed the database
├── public/
│   └── style.css            # Stylesheet
├── routes/
│   └── itemsRouter.js       # Defines all app routes
├── views/
│   ├── index.ejs            # Home page with category cards
│   ├── category.ejs         # Category page showing items
│   └── addItem.ejs          # Form to add a new item
└── app.js                   # Entry point
```

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page — displays all categories |
| GET | `/categories/:id` | Shows all items in a category |
| GET | `/items/add` | Renders the add item form |
| POST | `/categories/:id/add` | Handles add item form submission |
| DELETE | `/items/:id/delete` | Deletes an item by ID |

## Database Setup

Make sure you have PostgreSQL installed and running, then create the database:

```bash
psql -U postgres
CREATE DATABASE inventory_app;
\q
```

Then run the populate script to create tables and seed data:

```bash
node db/populatedb.js
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/stevemuiru/inventory-app.git
cd inventory-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database (see above)

4. Start the server:
```bash
node app.js
```

5. Open your browser and visit:
```
http://localhost:3000
```

## Database Schema

```sql
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    category_id INTEGER REFERENCES categories(id)
);
```

## Dependencies

- [express](https://expressjs.com/) — Web framework
- [ejs](https://ejs.co/) — Templating engine
- [pg](https://node-postgres.com/) — PostgreSQL client for Node.js