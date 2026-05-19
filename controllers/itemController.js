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

module.exports = { getItems, getItemsByCategory }