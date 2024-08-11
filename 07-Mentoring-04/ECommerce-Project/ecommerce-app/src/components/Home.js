
import { ProductsDisplay } from "./ProductsDisplay"
import { CartManagement } from "./CartManagement"

import { Header } from "./Header"

import { Container, Row, Col } from "react-bootstrap"
import { products } from "../products"

import { useState } from "react"

const Home = () => {

  const sampleCartItemsModel = [

    {
      product: products[0],
      quantity: 1
    },
    {
      product: products[2],
      quantity: 3
    },
    {
      product: products[5],
      quantity: 7
    }

  ]

  const [cart, setCart] = useState(sampleCartItemsModel)

  const addToCart = (productItem) => {

    console.log(`Add to Cart...`);

    const matchingProduct = cart.find((cartItemModel) => (
      cartItemModel.product.id === productItem.id
    ));

    if (matchingProduct) {

      const updatedCartItems = cart.map((cartItem) => {

        if (cartItem.product.id === productItem.id) {

          const updatedCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity + 1
          }

          return updatedCartItem;
        } else {

          const newCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity
          }

          return newCartItem;
        }
      });

      // const updatedCart = {
      //   cartItemsModel: updatedCartItems
      // }

      setCart(updatedCartItems);
    } else {

      const newCartItem = {
        product: productItem, quantity: 1
      }

      const updatedCartItems =
        [...cart, newCartItem];

      // const updatedCart = {
      //   cartItemsModel: updatedCartItems
      // }

      setCart(updatedCartItems);
    }
  }


  const removeFromCart = (productItem) => {

    const updatedCartItems = [];

    cart.forEach((cartItem) => {

      if (cartItem.product.id === productItem.id) {

        if (cartItem.quantity === 1) {
          // If Quantity is 1, then 'remove' wil make as 0
          // So no need to add/copy it
        } else {

          let updatedCartItem = {
            product: cartItem.product,
            quantity: cartItem.quantity - 1
          }
          updatedCartItems.push(updatedCartItem);
        }
      } else {
        updatedCartItems.push(cartItem);
      }
    })

    // const updatedCart = {
    //   cartItemsModel: updatedCartItems
    // }

    setCart(updatedCartItems);
  }


  return (

    <Container>

      <Row>
        <Col>{<Header></Header>}</Col>
      </Row>

      <Row>
        <Col lg={9}>{<ProductsDisplay addToCart={addToCart} removeFromCart={removeFromCart}>
        </ProductsDisplay>}</Col>
        <Col lg={3}>{<CartManagement cartItemsModel={cart} addToCart={addToCart} removeFromCart={removeFromCart}></CartManagement>}</Col>
      </Row>
    </Container>


  )
}

export { Home }