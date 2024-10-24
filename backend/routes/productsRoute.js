const express = require('express')
const productRoute = express.Router()
const { allProductContrl, singleProductContrl, createProductsCtrl,
    updateProductCtrl, deleteProductCtrl
 } = require('../controllers/productController')


productRoute.get( "/products",  allProductContrl )
productRoute.post( "/create/products",  createProductsCtrl )
productRoute.get( "/single/products/:id", singleProductContrl )
productRoute.put( "/update/products/:id", updateProductCtrl )
productRoute.delete( "/delete/products/:id", deleteProductCtrl )



module.exports = productRoute