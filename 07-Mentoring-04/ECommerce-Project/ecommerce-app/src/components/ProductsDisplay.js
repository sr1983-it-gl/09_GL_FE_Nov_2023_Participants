

import {ProductsView} from "./ProductsView"

const ProductsDisplay = ({addToCart, removeFromCart}) => {

  return (
    <div style={{backgroundColor : 'lightgreen'}}>
      
      <h2>Sample Products</h2>
      <hr/>

      <ProductsView addToCart={addToCart} removeFromCart={removeFromCart}></ProductsView>
    </div>
  )
}

export {ProductsDisplay}