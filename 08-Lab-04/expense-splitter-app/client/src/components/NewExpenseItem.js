
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NewExpenseItem = () => {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  function newExpenseItemForm() {

    return (
      <Form>

        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Expense Description" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>

            {/*
              // array
              // array.map ( (payeeName) => {
                }) 
              // Dynamic Code
            */}
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