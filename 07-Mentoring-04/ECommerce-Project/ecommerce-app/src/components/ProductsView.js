
import {products} from "../products"
import {ProductView} from "./ProductView"

import {Row} from "react-bootstrap"

const ProductsView = ({addToCart, removeFromCart}) => {

  return (

    <Row>

    {
      products.map( (productModel) => {

        return (
          <ProductView productModel={productModel} addToCart={addToCart}
          removeFromCart={removeFromCart}></ProductView>
        )
      })
    }

    </Row>
  )
}

export {ProductsView}