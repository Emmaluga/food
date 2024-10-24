import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const foodApi = createApi({


    reducerPath: 'foodApi',
   
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    endpoints: (builder)=> ({
      products: builder.query({
        quary: ()=> '/products'
      })
    })

       
    
})

export const { useProductsQuery } = foodApi

