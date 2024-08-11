
// cartItemModel
// product -> 
// name
// price
// quantity

import { Button, Container, Row, Col } from "react-bootstrap"

const CartItemView = ({ cartItemModel, addToCart, removeFromCart }) => {

  return (

    <Row>
      <Col lg={4}>{cartItemModel.product.name}</Col>

      <Col lg={2}>
        <Button variant="primary" onClick={() => {

          removeFromCart(cartItemModel.product)
        }}>
          -
        </Button>
      </Col>

      <Col lg={2}>
        <Button variant="primary" onClick={() => {

          addToCart(cartItemModel.product)
        }}>
          +
        </Button>

      </Col>

      <Col lg={4}>
        {cartItemModel.quantity} * {cartItemModel.product.price}
      </Col>

    </Row>
  )
}

export { CartItemView }