const pool = require("../db/pool")

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
    const {rows} = await pool.query(`
      SELECT items.id, items.name, items.description, items.price, items.quantity, 
             items.category_id, categories.name AS category_name
      FROM items 
      JOIN categories ON items.category_id = categories.id 
      WHERE items.category_id = $1
    `, [id])
    res.render("category", {category: rows})
  } catch(err) {
     console.error("Something went wrong", err)
  }
}

function addItemForm(req, res){
  const { id } = req.params
  res.render("addItem", { category_id: id })
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

async function deleteItem(req, res) {
  try{
    const {id} = req.params
    const {category_id} = req.body
    await pool.query("UPDATE items SET quantity = quantity - 1 WHERE id = $1", [id])
    res.redirect(`/categories/${category_id}`)
  } catch(err) {
    console.log("Something went wrong", err)
  }
}

module.exports = { getItems, getItemsByCategory, addItemForm, addItem, deleteItem }