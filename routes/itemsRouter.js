const express = require("express")
const router = express.Router()
const { getItems, getItemsByCategory, addItemForm, addItem, deleteItem } = require("../controllers/itemsController")


router.get('/', getItems)
router.get('/categories/:id', getItemsByCategory)
router.get('/categories/:id/add', addItemForm)
router.post('/categories/:id/add', addItem)
router.post('/items/:id/delete', deleteItem)



module.exports = router