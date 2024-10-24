import React from 'react'
import {configureStore} from '@reduxjs/toolkit' 
import { foodApi } from  "../Api/FoodApi" 


export const centralstore = configureStore({

    reducer: {

       [foodApi.reducerPath]:foodApi.reducer
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(foodApi.middleware) 

})
 
  



