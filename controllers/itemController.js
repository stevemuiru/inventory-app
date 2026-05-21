const pool = require("./pool")

async function getItems(req, res) {
 try {
   const {rows} = await pool.query("SELECT * FROM items JOIN categories ON items.category_id = categories.id") 
   res.render("index", {items : rows})
 } catch(err) {
   console.error("Something went wrong", err)
 }  
}

async function getItemsByCategory(req, res) {
  try {
    const {id} = req.params
    const {rows} = await pool.query("SELECT * FROM items JOIN categories ON items.category_id = categories.id WHERE items.category_id = $1", [id])
     res.render("index", {category: rows})
  } catch(err) {
     console.error("Something went wrong", err)
  }
}

function addItemForm(req, res){
  res.render("addItem")
}

async function addItem(req, res) {
  try {
    const {name, description, price, quantity, category_id} = req.body
    await pool.query("INSERT INTO items (name, description, price, quantity, category_id) VALUES ($1, $2, $3, $4, $5)", [name, description, price, quantity, category_id])
    res.redirect("/")
  } catch(err){
     console.error("Something went wrong", err)
  }
}

module.exports = { getItems, getItemsByCategory, addItemForm, addItem }