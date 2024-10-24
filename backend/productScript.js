require('dotenv').config()
const products = require('./data/productsData')
const process = require( 'node:process');
const connectDB = require('./config/connectDB');
const productsModel = require('./models/productsModel');
connectDB(process.env.connectdb)


const productDataLoad = async ()=>{
   
    try {
      
   await productsModel.deleteMany({})
   await productsModel.insertMany(products)
   console.log('products loaded successfully to DB')
      process.exitCode = 1
    } catch (error) {
      console.log('products failed to load to DB', error)
      process.exitCode = 1
      
    }
}

productDataLoad()
