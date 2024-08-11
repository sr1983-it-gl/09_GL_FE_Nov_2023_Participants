
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {Col} from "react-bootstrap"

// Home.addToCart

const ProductView = ({productModel, addToCart, removeFromCart}) => {

  function productComponent() {
    return (

      <Col className='my-3'>

      <Card style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={productModel.image} />
        
        <Card.Body>
          <Card.Title>{productModel.name}</Card.Title>
      
          <Card.Text>
            {productModel.price}
          </Card.Text>
         
          <Button variant="primary" onClick={() => {

              addToCart(productModel)
              // Invoke 'Add To Cart' functionality
          }}>
            
            Add to Cart
          </Button>

          <Button variant="primary" onClick={() => {

            removeFromCart(productModel)
            // Invoke 'Add To Cart' functionality
            }}>

            Remove from Cart
          </Button>

        </Card.Body>
      
      </Card>      
      </Col>

    );
  }
  
  return (
    productComponent()
  )
}

export {ProductView}