const asyncHandler = require('express-async-handler')
const productsModel = require('../models/productsModel')


const allProductContrl = asyncHandler ( async ( req, res ) => {
  const keyword = req.query.keyword ? {
     heading: {
       $regex: req.query.keyword,
       $options: "i"
     }

  } : {}

  const category = req.query.category ? {
      category: {
       $regex: req.query.category,
       $options: "i"
      }

  }: {}

    const page = req.query.pageNumber || 0
    const pagePerDisplay = 5
    const count = await productsModel.find({...keyword, ...category}).countDocuments()

    const products = await productsModel
    .find({...keyword , ...category })
     .sort({createdAt: 1})
    .skip(page * pagePerDisplay)
    .limit(pagePerDisplay)
    

    if(!products){
       res.status(500)
       throw new Error('products not in db')
    }

    res.status(200)

    .json({
        message: "products sent",
        products,
        pagePerDisplay,
        page,
        pages: Math.ceil(count / pagePerDisplay ),
        count,
     
        
      })
      
    })


    const createProductsCtrl = asyncHandler ( async (req,res)=> {
      const {image, price, heading, 
        discription, ratings, category, 
        AddCart, BuyCart } = req.body
    
      const existProducts = await productsModel.findOne({image})
          if(existProducts){
            res.status(500)
            throw new Error(' products available pls createnew one!')
          }
    
      const createNewProducts = await productsModel.create({
        image, price, discription, 
        heading, ratings, category,
        AddCart, BuyCart
    
      })
      if(!createNewProducts){
        res.status(500)
        throw new Error('no products credentials')
    
      }
    
      res.status(200)
      res.json({
        message: 'products sent',
        createNewProducts
      })
      
    })

    
  
    const singleProductContrl = asyncHandler ( async (req, res)=> {
    
        const singleProduct = await productsModel
        .findById(req.params.id)
    
        if(!singleProduct){
            res.status(500)
            throw new Error('single products not in db')
         }
     
         res.status(200)
     
         .json({
             message: "single products ",
             singleProduct
         })
     
    
    })
    


const updateProductCtrl = asyncHandler ( async (req,res)=> {
    
const updateProduct = await productsModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
 
if(!updateProduct){
  res.status(500)
  throw new Error('singlenot updated in db')
}

res.status(200)

.json({
   message: " products updated ",
   updateProduct
})

})


const  deleteProductCtrl = asyncHandler ( async (req,res)=> {
  const deleteProduct = await productsModel.findByIdAndDelete(req.params.id)
  if(!deleteProduct){
    res.status(500)
    throw new Error(' cant delete product in db')
  }
  
  res.status(200)
   res.json({
     message: "products deleted",
     deleteProduct
  })
  
})


module.exports = {

    allProductContrl,
    createProductsCtrl,
    singleProductContrl,
    updateProductCtrl,
    deleteProductCtrl


   
 

}