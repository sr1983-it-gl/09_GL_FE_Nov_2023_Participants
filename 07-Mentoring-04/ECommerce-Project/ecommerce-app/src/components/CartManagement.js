
import {CartItemsView} from "./CartItemsView"

import {CartPricesView} from "./CartPricesView"

// cartItemModel
  // product -> 
    // name
    // price
  // quantity

const CartManagement = ({cartItemsModel, addToCart, removeFromCart}) => {

  return (
    <div style={{backgroundColor : 'lightblue'}}>
      
      <h2>Cart Items</h2>
      <hr/>

      {
        <>
        <CartItemsView cartItemsModel={cartItemsModel}
        addToCart={addToCart} removeFromCart={removeFromCart}>

        </CartItemsView>

        <CartPricesView cartItemsModel={cartItemsModel}></CartPricesView>

        </>
      }

    </div>
  )
}

export {CartManagement}