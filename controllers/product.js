// require schema 
const { updateOne } = require('../models/product')
const product = require ('../models/product')

//test route 
exports.test = async (req, res)=> {
    try {
        res.send('hello ! this is test ')
    } catch (error) {
        console.log(error )
        
    }
}
// add product 
exports.addProduct = async (req, res) => {
    try {
        const {name,price ,discrption } =req.body 
        const newProduct = new product({name,price,discrption})
        await newProduct.save()
        res.status(200).send({meg:'product added successfully ',newProduct})
        
    } catch (error) {
        res.status(400).send({meg : ' error is adding new product', error }) 
        
    }
}

// get all products 
exports.getProducts = async (req,res)=> {
    try {
        const Product= await Product.find()
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({meg:'error with getting products',error })
        
    }
}
// get products by ID
exports.getProductsbyId = (_id) = async (req,res) =>{
    try {
        const _id = req.params
        const product = product.findById({_id})
        if (!product){
            res.stauts(400).send({mesg:'product not found', error })
        }
        res.stauts(200).send (product)
    } catch (error) {
        res.status(400).send({meg:' error with getting product by ID '})
        
    }
} 

//delete products 
exports.deleteProduct = async (req, res ) => { 
    try {

        const _id = req.params
        await product.findByIdAndDelete({_id})

    } catch (error) {
        res.status(400).send({msg:'error with getting products by id ', error })
        
        
    }
}

// edit products 
exports.editProduct = async (req, res) => {
    try {
        const {_id}= req.params
        const newProduct= req.body 
        await product.updateOne({_id},{$set: newProduct})
        res.stauts(200).send({msg:'product updatad successfully !'})
    } catch (error) {
        res.status(400).send({meg:'cannot edit this product', error })

        
    }
}