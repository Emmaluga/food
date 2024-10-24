const mongoose = require('mongoose')

const productModel =  mongoose.Schema({

     image: {

        type: String,
        required: true
     },

     
     price: {
        
        type: String,
        required: true
      },
      
      heading:{
         
         type: String,
         required: true
         
      },
      discription: {
         
         type: String,
         required: true
      },
      category: {
         
         type: String,
         required: true
      },


    ratings:{

    type: String,
    required: true
            
     },
     
     AddCart: {
      type: String,
      required: true
     },

     BuyCart: {
      type: String,
      required: true
     },
 
   
    


},

 {
    timestamps: true
 }
)

module.exports = mongoose.model("products", productModel)



