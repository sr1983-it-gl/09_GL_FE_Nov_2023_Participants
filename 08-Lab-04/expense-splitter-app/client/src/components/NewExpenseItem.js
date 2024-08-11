
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {getAllPayeeNames} from "../service/expense-utils"
import { useRef } from 'react';

import {postExpenseItem} from "../service/expense"

const NewExpenseItem = ({expenseItems}) => {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uniquePayeeNames = getAllPayeeNames(expenseItems)
  
  // Ref Hooks
  const expenseDescriptionRef = useRef(null);
  // payeeName
  // date
  // amount 

  const handleExpenseCreation = (event) => {

    event.preventDefault()
    
    // get the values - expenseDescriptiion, payeeName, date, price
    const expenseDescriptionValue = expenseDescriptionRef.current.value    
      // ;payeeName
      // date
      // amount

    // 
    const newExpenseItem = {
        "expenseDescription": expenseDescriptionValue,
        // "payeeName": "?",
        // "price": ?,
        // "date": "?"
    }

    // TODO
    // postExpenseItem(newExpenseItem)
    // print(response)

    handleClose();
  }

  function newExpenseItemForm() {

    return (
      <Form onSubmit={handleExpenseCreation}>

        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Expense Description" 
          ref={expenseDescriptionRef} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>

          <Form.Select aria-label="Default select example">
            <option>SELECT A PAYEE</option>
            {
              uniquePayeeNames.map( (payeeName) => {

                return (
                  <option value={payeeName}>{payeeName}</option>
                )
              })
            }

          </Form.Select>

        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control type="date"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="expensePrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Expense Price"/>
        </Form.Group>

      {/* //
        Payeename [Text]
        Date [Date]
        Price [Number] 
       */}
        
      
        <Button variant="primary" type='submit' onClick={handleClose}>
              Submit
            </Button>
        
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

      </Form>
    );
  }
  
  function newExpenseModal() {
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className='float-end'>
          New Expense Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
      
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>
            {
              newExpenseItemForm()
            }
          </Modal.Body>              
      
        </Modal>
      </>
    );
  }

  
  return (
    <div>
      {
        newExpenseModal()
      }
    </div>
  )
}

export {NewExpenseItem}