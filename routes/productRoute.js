// require express 
const express = require('express')
const { getProducts, test, addProduct, getProductsbyId, deleteProduct, editProduct } = require('../controllers/product')

//require routes from express 
const router = express.Router() 

// create routes 

//test routes 
router.get('/test',test)



// add new Product 
router.post('/add_product',addProduct)

// get all products 
router.get('/get_products', getProducts)

//get product by ID 
router.get('/get_one/:id',getProductsbyId)

//delete product 
router.delete('/delete_product/:_id',deleteProduct)

//edit product 
router.put('/edit_product/:_id',editProduct)


//export router 
module.exports = router
