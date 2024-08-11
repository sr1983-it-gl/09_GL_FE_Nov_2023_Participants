import { Row, Col, Button } from "react-bootstrap";


const CartPricesView = ({ cartItemsModel }) => {

  const calculateItemsPrice = () => {

    let itemsPrice = 0;

    cartItemsModel.forEach((cartItem) => {

      itemsPrice = itemsPrice +
        (cartItem.product.price * cartItem.quantity);
    })

    return itemsPrice;
  }

  const calculateTaxPrice = () => {
    return (calculateItemsPrice() * 10) / 100
  }

  const calculateShippingPrice = () => {
    return 500;
  }

  const calculateTotalPrice = () => {

    return calculateItemsPrice() + calculateTaxPrice() + calculateShippingPrice();
  }


  return (

    <>

      <hr />

      <Row>
        <Col>Items Price</Col>
        <Col>{calculateItemsPrice()}</Col>
      </Row>

      <Row>
        <Col>Tax Price:</Col>
        <Col>{calculateTaxPrice()}</Col>
      </Row>

      <Row>
        <Col>Shipping Price:</Col>
        <Col>{calculateShippingPrice()}</Col>
      </Row>
      <hr />


      <Row>
        <Col>Total Price:</Col>
        <Col>{calculateTotalPrice()}</Col>
      </Row>
      <hr />

      <Row>
        <Col xs={12}>
          <Button>Checkout</Button>
        </Col>
      </Row>

    </>
  )

}

export { CartPricesView };
