import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Categories from '../categories/Categories'
import ProductsCard from './ProductsCard'

const Products = ({products,handleAddProducts}) => {
  return (
    <div>
      
      <Container>
      <Categories/>
        <Grid container justifyContent='center' sx={{mt:1}} spacing={4}>
          {
            products.map((product)=> (
              <Grid item key={product.id}>
            <ProductsCard product= {product} handleAddProducts={handleAddProducts}/>
          </Grid>
            ))
          }
          
        </Grid>

      </Container>
      
      </div>
  )
}

export default Products