import React from 'react'
import {products} from "../data"  /**beimportálom a data.js-ből a products tömböt */
import { SingleProducts } from './SingleProducts'

export const Products = () => {
  console.log(products)
  return (
    <div className="container bg-light ">
      <div className='d-flex justify-content-center gap-2 flex-wrap'>
        <h2 className='w-100 m-2'>Our products</h2>
        {products.map(obj=><SingleProducts key={obj.id} {...obj}/> )}
      </div>
    </div>
  )
}

