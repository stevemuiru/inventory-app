const express = require("express")
const router = express.Router()
const { getItems, getItemsByCategory, addItemForm, addItem, deleteItem } = require("../controllers/itemsController")


router.get('/', getItems)
router.get('/categories/:id', getItemsByCategory)
router.get('/items/add', addItemForm )
router.post('/categories/:id/add', addItem)
router.delete('/items/:id/delete', deleteItem)



module.exports = router